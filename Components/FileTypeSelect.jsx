const FileTypeSelect = ({ fileType, setFileType }) => {
    return (
      <div>
        <select
          value={fileType}
          onChange={(e) => setFileType(e.target.value)}
          className="w-full h-[20px] border border-gray-300 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out bg-gray-50"
        >
          <option value="">All Types</option>
          <option value="pdf">PDF</option>
          <option value="doc">Word (DOC)</option>
          <option value="docx">Word (DOCX)</option>
          <option value="xls">Excel (XLS)</option>
          <option value="xlsx">Excel (XLSX)</option>
          <option value="ppt">PowerPoint (PPT)</option>
          <option value="pptx">PowerPoint (PPTX)</option>
        </select>
      </div>
    );
  };
  
  export default FileTypeSelect;
  