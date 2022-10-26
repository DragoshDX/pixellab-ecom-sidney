import { useEffect, useState } from 'react';
import { baseUrl } from '..';

const alterCart = (cart, productId) => {
  const { products } = cart;

  const product = products.find((product) => {
    return product.productId === productId;
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

export const useCart = (cartId = 2) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/carts/${cartId}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setCart(result);
      });
  }, [setCart, cartId]);

  const addProduct = (productId) => {
    const newCart = alterCart(cart, productId);
    setCart({ ...newCart });
  };

  return { cart, setCart, addProduct };
};
