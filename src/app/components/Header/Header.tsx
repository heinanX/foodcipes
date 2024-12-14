import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <header className="hidden sm:flex absolute top-0 left-0 w-full py-6 px-4 bg-primary justify-between font-bold uppercase tracking-widest text-xl text-rose-ebony">
      <div></div>
      <a href="/">foodcipes</a>
      <NavBar />
    </header>
  );
};

export default Header;
