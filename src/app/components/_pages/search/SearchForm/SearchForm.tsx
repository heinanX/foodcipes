'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { SyntheticEvent } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const SearchForm = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleForm = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      searchInput: { value: string };
    };

    const searchValue = target.searchInput.value || '';
    const params = new URLSearchParams(searchParams);
    params.set('query', searchValue);
    replace(`/search/?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleForm}
      className="space-x-4 flex bg-white rounded-2xl lg:w-96 lg:justify-between"
    >
      <label htmlFor="searchInput" className="sr-only">
        search
      </label>
      <input
        type="text"
        id="searchInput"
        className="py-2 px-1 rounded-full text-primary outline-none lg:w-full"
        placeholder='"Italian"'
      />
      <button className="text-primary py-1 px-5 flex items-center gap-2">
        <FaMagnifyingGlass />
      </button>
    </form>
  );
};

export default SearchForm;
