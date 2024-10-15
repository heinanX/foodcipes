const SearchForm = () => {
  return (
    <form className="space-x-4">
      <label></label>
      <input
        type="text"
        className="py-2 px-4 rounded-full text-rose-ebony"
        placeholder='"Italian"'
      />
      <button type="button" className="uppercase rounded bg-primary py-1 px-5">
        search
      </button>
    </form>
  );
};

export default SearchForm;
