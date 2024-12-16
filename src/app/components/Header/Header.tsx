import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <header className="hidden sm:flex absolute top-0 left-0 w-full py-6 px-10 2xl:px-24 bg-primary justify-between  text-rose-ebony">
      <a href="/" className="font-bold uppercase tracking-widest text-xl">
        foodcipes
      </a>
      <NavBar />
    </header>
  );
};

export default Header;
