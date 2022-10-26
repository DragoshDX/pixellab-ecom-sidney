import { createContext } from 'react';
import { useCart } from '../hooks';
import './../styles/index.css';

export const AppContext = createContext();

function MyApp({ Component, pageProps }) {
  const { cart, setCart, addProduct } = useCart();

  return (
    <AppContext.Provider value={{ cart, setCart, addProduct }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
