import { useEffect, useRef, useState } from 'react';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

export const InfinitePagination = ({ products, setPaginatedProducts }) => {
  const [pagination, setPagination] = useState({
    perPage: 8,
    page: 0,
    total: 0,
  });
  const loadMoreRef = useRef(null);

  // console.log(loadMoreRef.current);

  useEffect(() => {
    setPagination({
      perPage: pagination.perPage,
      page: pagination.page,
      total: products.length,
    });
  }, [products, pagination.perPage, pagination.page, setPagination]);

  useEffect(() => {
    const { total, page, perPage } = pagination;

    if (total === 0 || page < 1) {
      return;
    }

    const newProducts = products.slice().splice(perPage * (page - 1), perPage);

    setPaginatedProducts(newProducts);
  }, [pagination, setPaginatedProducts, products]);

  useEffect(() => {
    const loadMoreEdge = loadMoreRef.current;
    const observer = new IntersectionObserver((entries) => {
      const [intersectionObserverEntry] = entries;

      console.log(pagination.total, pagination.page, pagination.perPage);

      if (intersectionObserverEntry.isIntersecting && pagination.total !== 0) {
        setPagination({
          total: pagination.total,
          perPage: pagination.perPage,
          page: pagination.page + 1,
        });
      }
    }, options);

    observer.observe(loadMoreEdge);

    return () => {
      observer.unobserve(loadMoreEdge);
    };
  }, [pagination.total, pagination.page, pagination.perPage]);

  return (
    <div ref={loadMoreRef} className="border border-t border-red-700"></div>
  );
};
