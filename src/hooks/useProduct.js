import { useEffect, useState } from 'react';
import { baseUrl } from '..';

const productCache = {};

export const useProduct = (pid) => {
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState('200');

  useEffect(() => {
    if (pid === undefined) {
      return;
    }

    if (productCache[pid] !== undefined) {
      setProduct(productCache[pid]);
    } else {
      fetch(`${baseUrl}/products/${pid}`)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          productCache[pid] = result;
          setProduct(result);
        })
        .catch((_) => {
          setStatus('404');
        });
    }
  }, [pid, setProduct, setStatus]);

  return { status, product };
};
