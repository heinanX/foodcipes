import NavBar from '../NavBar/NavBar';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="hidden sm:flex absolute top-0 left-0 w-full py-6 px-10 sm:px-24 bg-primaryDark justify-between  text-secondary">
      <Link href="/" className="font-bold uppercase tracking-widest text-xl">
        foodcipes
      </Link>
      <NavBar />
    </header>
  );
};

export default Header;
