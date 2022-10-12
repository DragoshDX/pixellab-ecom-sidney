import Head from 'next/head';
import { useEffect, useState } from 'react';
import { CartControl } from '../components/cart';
import { GridControls, ProductGrid } from '../components/catalog';
import { useProducts } from '../hooks';
import { Layout } from '../layouts';

const Home = () => {
  const [perRow, setPerRow] = useState(4);
  const [products] = useProducts();
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

  const [paginatedProducts, setPaginatedProducts] = useState([]);

  const { perPage, page, total } = pagination;
  const pagesCount = Math.ceil(total / perPage);

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <Layout>
        <main className="container px-4 lg:px-0 mx-auto">
          <header className="flex justify-end text-zinc-400">
            <GridControls setPerRow={setPerRow}></GridControls>

            <CartControl></CartControl>
          </header>

          <section className="mt-16">
            <ProductGrid
              products={paginatedProducts}
              perRow={perRow}
            ></ProductGrid>
          </section>

          <section>
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
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Home;
