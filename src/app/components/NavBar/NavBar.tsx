'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Recipe Index',
    url: '/recipes',
  },
  {
    title: 'Search Recipe',
    url: '/search',
  },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className=" flex flex-col sm:flex-row gap-x-4 font-semibold tracking-wide">
        {navLinks.map((link, i) =>
          pathname === link.url ? (
            <></>
          ) : (
            <li
              key={i}
              className="hover:text-taupe hover:underline text-center"
            >
              <Link
                href={link.url}
                prefetch
                className={pathname === link.url ? 'underline' : ''}
              >
                {link.title}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
