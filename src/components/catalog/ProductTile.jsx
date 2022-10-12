import Link from 'next/link';

export const ProductTile = ({ product }) => {
  const { title, price, image, id } = product;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <article className="w-full">
      <header>
        <div className="w-full h-72 text-center">
          <Link href={`/product/${id}`}>
            <a title={title}>
              <img
                alt={`Image for product ${title}`}
                src={image}
                className="h-full inline"
              ></img>
            </a>
          </Link>
        </div>
      </header>

      <section className="mt-8 text-center text-sm">
        <h1 className="uppercase text-zinc-400 mb-2">{title}</h1>

        <div className="text-zinc-900 font-light">{formattedPrice}</div>
      </section>
    </article>
  );
};
