const PlatformSelect = ({ platform, setPlatform }) => {
    return (
      <div>
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="block w-full h-[20px] p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out bg-gray-50"
        >
          <option value="">Choose Platform</option>
          <option value="google">Google</option>
          <option value="drive">Google Drive</option>
          <option value="yandex">Yandex</option>
          <option value="books">Google Books</option>
          <option value="scholar">Google Scholar</option>
        </select>
      </div>
    );
  };
  
  export default PlatformSelect;
  