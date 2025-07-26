function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search countries..."
      className="p-2 border rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}

export default SearchBar;
