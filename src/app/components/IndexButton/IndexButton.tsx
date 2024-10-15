import { Dispatch, SetStateAction } from 'react';

const IndexButton = ({
  item,
  active,
  setActive,
}: {
  item: string;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div>
      <button
        onClick={() => setActive(item)}
        className={`uppercase hover:text-rose-ebony hover:text-xl hover:border hover:rounded-md hover:bg-primary w-full ${
          active === item ? 'text-green-500' : ''
        }`}
      >
        {item}
      </button>
    </div>
  );
};

export default IndexButton;
