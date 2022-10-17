import { createContext } from 'react';
import './../styles/index.css';

export const AppContext = createContext();
const initialValue = {
  cart: {
    qty: 0,
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <AppContext.Provider value={initialValue}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
