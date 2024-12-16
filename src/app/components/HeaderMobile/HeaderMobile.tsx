'use client';
import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import NavBar from '../NavBar/NavBar';
import Separator from '../Separator/Separator';
import { usePathname } from 'next/navigation';

const HeaderMobile = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [oldParams, setOldParams] = useState(pathname);

  const handleDrawer = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  useEffect(() => {
    if (pathname !== oldParams) {
      setIsOpen(false);
      setOldParams(pathname);
    }
  }, [pathname, oldParams]);

  return (
    <header className="sm:hidden flex flex-col absolute top-0 left-0 w-full py-6 px-4 bg-primary justify-between text-rose-ebony">
      <div className="flex justify-between w-full mb-2">
        <div></div>
        <a href="/" className="font-bold uppercase tracking-widest text-xl">
          foodcipes
        </a>
        <button
          onClick={handleDrawer}
          className={` p-0 pb-1 text-xl
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
          <Separator />
          <div className="flex justify-center mt-6">
            <NavBar />
          </div>
        </>
      ) : null}
    </header>
  );
};

export default HeaderMobile;
