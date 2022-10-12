import { useEffect, useState } from 'react';
import { baseUrl } from '..';

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
  }, []);

  return cart;
};
