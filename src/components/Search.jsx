const Search = ({
  searchTerm,
  searchResults,
  isLoading,
  onSearchTermChange,
}) => (
  <div className="my-4">
    <input
      type="text"
      placeholder="Search..."
      className="p-2 border rounded"
      value={searchTerm}
      onChange={(e) => onSearchTermChange(e.target.value)}
    />
    {isLoading && <p className="text-gray-500">Loading...</p>}
    {searchResults?.length > 0 && (
      <ul className="mt-2">
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    )}

    {searchResults?.length === 0 && !isLoading && (
      <p className="text-gray-500">No results found.</p>
    )}
  </div>
);

export default Search;
