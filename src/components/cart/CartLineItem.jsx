import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { useProduct } from '../../hooks';
import { AppContext } from '../../pages/_app';

export const CartLineItem = ({ product }) => {
  const { quantity, productId } = product;
  const { product: cartItem } = useProduct(productId);
  const isLoaded = cartItem !== null;
  const { alterProduct } = useContext(AppContext);

  if (!isLoaded) {
    return <></>;
  }

  const { image, price, id, title } = cartItem;
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price * quantity);

  return (
    <tr>
      <td>
        <Link href={`/products/${id}`}>
          <a title={title}>
            <Image
              src={image}
              width="100"
              height="100"
              objectFit="contain"
              alt=""
            ></Image>
          </a>
        </Link>

        <Link href={`/products/${id}`}>
          <a title={title}>{title}</a>
        </Link>
      </td>
      <td></td>
      <td>
        <div className="border">
          <button
            type="button"
            title="Decrease"
            className="p-4"
            onClick={() => {
              alterProduct(id, -1);
            }}
          >
            -
          </button>
          {quantity}
          <button
            type="button"
            title="Increase"
            className="p-4"
            onClick={() => {
              alterProduct(id, 1);
            }}
          >
            +
          </button>
        </div>
      </td>
      <td>{formattedPrice}</td>
    </tr>
  );
};
