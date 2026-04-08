import SearchInput from '../Components/SearchInput';
import FileTypeSelect from '../Components/FileTypeSelect';
import PlatformSelect from '../Components/PlatformSelect';
import { useState } from 'react';

const SearchApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [fileType, setFileType] = useState('pdf');
  const [platform, setPlatform] = useState('google');

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm) {
      let searchUrl = '';
      const fileTypeQuery = `+filetype:${fileType}`;

      if (platform === 'google') {
        searchUrl = `https://www.google.com/search?q=intitle:${searchTerm}${fileTypeQuery}`;
      } else if (platform === 'drive') {
        searchUrl = `https://www.google.com/search?q=intitle:${searchTerm}${fileTypeQuery}+site:drive.google.com`;
      } else if (platform === 'yandex') {
        searchUrl = `https://yandex.com/search/?text=intitle:${searchTerm}${fileTypeQuery}`;
      } else if (platform === 'books') {
        searchUrl = `https://www.google.com/search?q=intitle:${searchTerm}${fileTypeQuery}+site:books.google.com`;
      } else if (platform === 'scholar') {
        searchUrl = `https://scholar.google.com/scholar?q=intitle:${searchTerm}${fileTypeQuery}`;
      }

      window.open(searchUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white p-10 rounded-lg shadow-lg w-[500px] max-w-lg">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Search Documents</h1>
        <form onSubmit={handleSearch} className="space-y-6">
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FileTypeSelect fileType={fileType} setFileType={setFileType} />
          <PlatformSelect platform={platform} setPlatform={setPlatform} />
          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out shadow-md"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchApp;
