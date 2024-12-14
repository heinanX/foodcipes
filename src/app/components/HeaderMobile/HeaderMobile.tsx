'use client';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import NavBar from '../NavBar/NavBar';

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDrawer = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <header className="sm:hidden flex flex-col absolute top-0 left-0 w-full py-6 px-4 bg-primary justify-between text-rose-ebony">
      <div className="flex justify-between w-full mb-2">
        <div></div>
        <a href="/" className="font-bold uppercase tracking-widest text-xl">
          foodcipes
        </a>
        <button
          onClick={handleDrawer}
          className={` p-0 pb-1
            ${
              isOpen
                ? ' rotate-45 transition-transform duration-500'
                : 'transition-transform duration-500'
            }
          `}
        >
          <FaPlus />
        </button>
      </div>
      {isOpen ? (
        <>
          <div className="h-[2px] w-full bg-rose-ebony"></div>
          <div className="flex justify-center mt-6 font-semibold tracking-wide">
            <NavBar />
          </div>
        </>
      ) : null}
    </header>
  );
};

export default HeaderMobile;
