import Link from 'next/link';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';
import { FaApple } from 'react-icons/fa';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section className="flex justify-between items-center lg:flex-col h-full z-10 relative lg:py-4">
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

        <div className="hidden lg:block">
          <span className="block w-4 h-4 bg-white rounded-full"></span>
        </div>
      </section>

      <nav
        className={`absolute left-0 -top-full transition-transform transform-gpu ${
          menuOpen ? 'translate-y-full' : ''
        } h-screen w-screen lg:w-screen-1/3 text-white bg-neutral-900`}
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
