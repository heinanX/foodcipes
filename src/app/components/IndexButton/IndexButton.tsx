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
        className={`uppercase hover:text-primary hover:text-xl hover:border hover:rounded-md hover:bg-secondary w-full ${
          active === item ? 'text-custGreen' : ''
        }`}
      >
        {item}
      </button>
    </div>
  );
};

export default IndexButton;
