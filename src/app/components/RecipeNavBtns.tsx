import { IoIosReturnLeft } from 'react-icons/io';
import { MdArrowCircleDown } from 'react-icons/md';

const RecipeNavBtns = () => {
  const styling =
    'flex gap-1 items-center px-2 py-1 rounded-md focus:outline focus:outline-2 focus:outline-orange-600';

  return (
    <section className="flex gap-4 py-5 text-sm">
      <a
        href="#recipe"
        className={`text-black bg-custGreen ${styling}`}
        role="button"
      >
        <MdArrowCircleDown aria-hidden="true" />
        To recipe
      </a>

      <a href="/" className={` bg-custYellow/50 ${styling}`} role="button">
        <IoIosReturnLeft aria-hidden="true" />
        return
      </a>
    </section>
  );
};

export default RecipeNavBtns;
