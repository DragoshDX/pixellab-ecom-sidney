import Head from 'next/head';
import { Layout } from '../layouts';

const Home = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <Layout>
        <main className="container px-4 lg:px-0 mx-auto">
          <div className="flex justify-end text-zinc-400"></div>
        </main>
      </Layout>
    </>
  );
};

export default Home;
