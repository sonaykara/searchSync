const SearchInput = ({ searchTerm, setSearchTerm }) => {
    return (
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter search term"
          className="block h-[20px] w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out bg-gray-50 placeholder-gray-400"
        />
      </div>
    );
  };
  
  export default SearchInput;
  