import Link from 'next/link';

const navLinks = [
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
  return (
    <nav>
      <ul>
        {navLinks.map((link, i) => (
          <li key={i} className="hover:text-taupe hover:underline">
            <Link href={link.url} prefetch>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
