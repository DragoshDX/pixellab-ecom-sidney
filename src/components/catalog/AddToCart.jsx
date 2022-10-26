import { useContext } from 'react';
import { baseUrl } from '../..';
import { AppContext } from '../../pages/_app';

const alterCart = (cart, productId) => {
  const { products } = cart;

  const product = products.find((product) => {
    return product.id === productId;
  });

  if (product === undefined) {
    products.push({
      productId,
      quantity: 1,
    });
  } else {
    product.quantity += 1;
  }

  return cart;
};

export const AddToCart = ({ product }) => {
  const { cart, setCart } = useContext(AppContext);

  if (cart === null) {
    return;
  }

  const { id: cartId } = cart;
  const { id: productId, title } = product;

  const newCart = {};

  const onClick = () => {
    fetch(`${baseUrl}/carts/${cartId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCart),
    })
      .then((response) => {
        return response.json();
      })
      .then((_) => {
        const oldCart = alterCart(cart, productId);
        const newCart = { ...oldCart };

        setCart(newCart);
      });
  };

  return (
    <button
      className="bg-black text-white uppercase font-medium text-sm py-3 px-6 hover:bg-amber-800 transition-colors"
      title={`Add ${title} to cart`}
      type="button"
      onClick={onClick}
    >
      Add to Cart
    </button>
  );
};
