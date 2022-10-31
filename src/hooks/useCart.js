import { useEffect, useState } from 'react';
import { baseUrl } from '..';

const alterCart = (cart, productId, quantity) => {
  const { products } = cart;

  const product = products.find((product) => {
    return product.productId === productId;
  });

  if (product === undefined) {
    products.push({
      productId,
      quantity,
    });
  } else {
    if (product.quantity + quantity <= 0) {
      cart.products = cart.products.filter((product) => {
        return product.productId !== productId;
      });
    } else {
      product.quantity += quantity;
    }
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

  const alterProduct = (productId, quantity = 1) => {
    const newCart = alterCart(cart, productId, quantity);
    setCart({ ...newCart });
  };

  return { cart, setCart, alterProduct };
};
