import Head from 'next/head';
import { useEffect, useState } from 'react';
import { CartControl } from '../components/cart';
import { GridControls, ProductGrid } from '../components/catalog';
import { Layout } from '../layouts';

const Home = () => {
  const [perRow, setPerRow] = useState(4);

  // fara dependinte in array
  // efectul ruleaza la prima executie a functiei Home
  useEffect(() => {
    fetch('https://swapi.dev/api/films')
      .then((response) => {
        // response.json -> Promise
        return response.json();
      })
      .then((result) => {
        console.log(result, 'then version');
      });

    (async () => {
      const response = await fetch('https://swapi.dev/api/films');
      const result = await response.json();
      console.log(result, 'await version');
    })();
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
            <ProductGrid
              products={Array(12).fill({
                name: 'Prod',
                price: '$12',
              })}
              perRow={perRow}
            ></ProductGrid>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Home;
