import Image from 'next/image';
import Link from 'next/link';
import { useProduct } from '../../hooks';

export const CartLineItem = ({ product }) => {
  const { quantity, productId } = product;
  const { product: cartItem } = useProduct(productId);
  const isLoaded = cartItem !== null;

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
            ></Image>
          </a>
        </Link>

        <Link href={`/products/${id}`}>
          <a title={title}>{title}</a>
        </Link>
      </td>
      <td></td>
      <td>{quantity}</td>
      <td>{formattedPrice}</td>
    </tr>
  );
};
