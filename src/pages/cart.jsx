import Head from 'next/head';
import { CartControl } from '../components/cart';
import { Layout } from '../layouts';

const Cart = () => {
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>

      <Layout>
        <main className="container px-4 lg:px-0 mx-auto">
          <header className="flex justify-between text-zinc-400">
            <div></div>

            <CartControl></CartControl>
          </header>

          <section className="mt-16">cart goes here</section>
        </main>
      </Layout>
    </>
  );
};

export default Cart;
