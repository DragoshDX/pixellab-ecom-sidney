import { useEffect, useState } from 'react';
import { baseUrl } from '..';

export const useProducts = (limit = 20) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/products?limit=${limit}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setProducts(result);
      });
  }, []);

  return [products];
};
