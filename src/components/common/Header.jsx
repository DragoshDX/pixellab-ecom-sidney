import Link from 'next/link';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { FaApple } from 'react-icons/fa';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="flex justify-between items-center h-full z-10 relative">
        <Link href="/">
          <a title="Home">
            <FaApple size="32"></FaApple>
          </a>
        </Link>

        <button
          title="Menu"
          type="button"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <CgMenu size="32"></CgMenu>
        </button>
      </section>

      <nav
        className={`absolute left-0 -top-full transition-transform transform-gpu ${
          menuOpen ? 'translate-y-full' : ''
        } h-screen w-screen text-white bg-neutral-900`}
      >
        <ul>
          <li>
            <Link href="/">
              <a title="Home">Home</a>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <a title="Contact">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
