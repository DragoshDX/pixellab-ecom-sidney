// /products/2 /products/5 /products/21

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { baseUrl } from '../..';
import { CartControl } from '../../components/cart';
import { Layout } from '../../layouts';

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (pid === undefined) {
      return;
    }

    fetch(`${baseUrl}/products/${pid}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProduct(result);
      });
  }, [pid]);

  if (product === null) {
    return <></>;
  }

  const { id, title, description, price, image } = product;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Layout>
        <main>
          <header className="container px-4 lg:px-0 mx-auto flex justify-between">
            <div></div>

            <CartControl></CartControl>
          </header>

          <section className="container px-4 lg:px-0 mx-auto">sus</section>
          <section className="border-t"></section>
          <section className="container px-4 lg:px-0 mx-auto">jos</section>
        </main>
      </Layout>
    </>
  );
};

export default ProductPage;
