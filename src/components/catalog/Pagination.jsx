import { useEffect, useState } from 'react';

export const Pagination = ({ products, setPaginatedProducts }) => {
  const [pagination, setPagination] = useState({
    perPage: 8,
    page: 1,
    total: 0,
  });

  useEffect(() => {
    setPagination({
      ...pagination,
      total: products.length,
    });
  }, [products]);

  useEffect(() => {
    const { total, page, perPage } = pagination;

    if (total === 0) {
      return;
    }

    const newProducts = [...products].splice(perPage * (page - 1), perPage);

    setPaginatedProducts(newProducts);
  }, [pagination]);

  const { perPage, page, total } = pagination;
  const pagesCount = Math.ceil(total / perPage);

  return (
    <ul className="flex gap-2">
      {Array(pagesCount)
        .fill('_')
        .map((_, index) => {
          const i = index + 1;

          return (
            <li
              key={index}
              className={`${i === page ? 'font-bold' : ''}`}
              onClick={() => {
                if (i === page) {
                  return;
                }

                setPagination({
                  ...pagination,
                  page: i,
                });
              }}
            >
              {i}
            </li>
          );
        })}
    </ul>
  );
};
