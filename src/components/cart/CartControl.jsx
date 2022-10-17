import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '../../pages/_app';

export const CartControl = () => {
  const { cart } = useContext(AppContext);

  return (
    <ul className="border border-zinc-400">
      <li>
        <Link href="/cart">
          <a
            className="w-24 h-24 flex justify-center items-center"
            title="Cart"
          >
            {cart.qty}
          </a>
        </Link>
      </li>
    </ul>
  );
};
