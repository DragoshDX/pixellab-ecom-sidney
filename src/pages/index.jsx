import Head from 'next/head';
import { useEffect, useState } from 'react';
import { baseUrl } from '..';
import { CartControl } from '../components/cart';
import { GridControls, ProductGrid } from '../components/catalog';
import { Layout } from '../layouts';

const Home = () => {
  const [perRow, setPerRow] = useState(4);
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({
    perPage: 4,
    page: 1,
    total: 20,
  });

  const { perPage, page, total } = pagination;
  const pagesCount = Math.ceil(total / perPage);

  // fara dependinte in array
  // efectul ruleaza la prima executie a functiei Home
  useEffect(() => {
    fetch(`${baseUrl}/products?limit=${perPage}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        // never mutate state
        setProducts(result);
      });
  }, []);

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
            <ProductGrid products={products} perRow={perRow}></ProductGrid>
          </section>

          <section>
            <ul className="flex gap-2">
              {Array(pagesCount)
                .fill('_')
                .map((_, index) => {
                  const i = index + 1;

                  return (
                    <li
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
