'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBook, FaMagnifyingGlass } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';

const navLinks = [
  {
    title: 'Home',
    sr: 'Home',
    icon: <FaHome />,
    url: '/',
  },
  {
    title: 'Index',
    sr: 'Recipe Index',
    icon: <FaBook />,
    url: '/recipes',
  },
  {
    title: 'Search',
    sr: 'Search Recipe',
    icon: <FaMagnifyingGlass />,
    url: '/search',
  },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className=" flex flex-col sm:flex-row gap-x-8 font-semibold tracking-wide">
        {navLinks.map((link) =>
          pathname === link.url ? null : (
            <li
              key={link.url}
              className="hover:text-taupe hover:underline text-center"
            >
              <Link
                href={link.url}
                prefetch
                aria-label={`Go to ${link.sr}`}
                className={`flex items-center gap-1 ${
                  pathname === link.url ? 'underline' : ''
                }`}
              >
                {link.icon} {link.title}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
