'use client';
import { useState } from 'react';
import IndexButton from '../components/IndexButton/IndexButton';

// prettier-ignore
const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
];

const page = () => {
  // const posts = await getPosts();
  const [active, setActive] = useState<string>('');

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-10">
      <span className="flex flex-col gap-2 items-center">
        <h2>index</h2>
        <nav>
          <ul className="flex gap-1 font-bold h-12">
            {alphabet.map((item, i) => (
              <li key={i} className="h-6 w-6 flex items-center justify-center">
                <IndexButton
                  item={item}
                  active={active}
                  setActive={setActive}
                />
              </li>
            ))}
          </ul>
        </nav>
      </span>

      <span className="flex gap-1">
        <a href="/" className="font-bold underline">
          click here
        </a>
        <p> to go to home</p>
      </span>
    </div>
  );
};

export default page;
