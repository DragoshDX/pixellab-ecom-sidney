import Link from 'next/link';

export const CartControl = () => {
  return (
    <ul className="border border-zinc-400">
      <li>
        <Link href="/cart">
          <a
            className="w-24 h-24 flex justify-center items-center"
            title="Cart"
          >
            1
          </a>
        </Link>
      </li>
    </ul>
  );
};
