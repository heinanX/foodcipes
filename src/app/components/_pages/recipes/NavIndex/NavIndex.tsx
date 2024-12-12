'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

// prettier-ignore
const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  ];

const NavIndex = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const activeQueryLetter = searchParams.toString().slice(-1);
  const [active, setActive] = useState(activeQueryLetter);

  const handleFiltering = (letter: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('query', letter);
    replace(`${pathname}?${params.toString()}`);
    setActive(letter);
  };

  return (
    <ul className="flex gap-1 font-bold h-12 flex-wrap px-5">
      {alphabet.map((item, i) => (
        <li
          key={i}
          aria-label={`Filter by ${item}`}
          className={`h-6 w-6 flex items-center justify-center lg:text-2xl ${
            active === item.toUpperCase() ? 'text-custYellow underline' : ''
          }
            }`}
        >
          <button
            className="uppercase"
            aria-current={active === item.toUpperCase() ? 'true' : undefined}
            onClick={(e) =>
              handleFiltering((e.target as HTMLButtonElement).innerText)
            }
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NavIndex;
