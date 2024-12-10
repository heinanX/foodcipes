'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

// prettier-ignore
const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  ];

const NavIndex = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleFiltering = (letter: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('query', letter);
    console.log('params  ', params.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <ul className="flex gap-1 font-bold h-12 flex-wrap px-5">
      {alphabet.map((item, i) => (
        <li
          key={i}
          aria-label={`Filter by ${item}`}
          className="h-6 w-6 flex items-center justify-center hover:border border-white lg:text-2xl"
        >
          <button
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
