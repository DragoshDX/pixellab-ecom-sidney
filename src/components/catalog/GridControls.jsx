import { useState } from 'react';

const buttonClasses = `w-24 h-24 border-l border-zinc-400 flex justify-center items-center`;

export const GridControls = () => {
  const [itemsPerRow, setItemsPerRow] = useState('1/row');

  return (
    <ul className="flex border border-l-0 border-zinc-400">
      <li>
        <button
          title="One per row"
          className={`${buttonClasses} ${
            itemsPerRow === '1/row' ? 'bg-black text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('1/row');
          }}
        >
          1
        </button>
      </li>

      <li>
        <button
          title="Two per row"
          className={`${buttonClasses} ${
            itemsPerRow === '2/row' ? 'bg-black text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('2/row');
          }}
        >
          2
        </button>
      </li>

      <li>
        <button
          title="Four per row"
          className={`${buttonClasses} ${
            itemsPerRow === '4/row' ? 'bg-black text-white' : ''
          }`}
          onClick={() => {
            setItemsPerRow('4/row');
          }}
        >
          4
        </button>
      </li>
    </ul>
  );
};
