import { useState, useEffect } from "react";
import CountryCard from "./components/CountryCard";
import SearchBar from "./components/SearchBar";
import Spinner from "./components/Spinner";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const itemsPerPage = 10;

  // List of countries to prioritize
  const priorityCountries = [
    "India",
    "Russia",
    "Israel",
    "France",
    "Japan",
    "United Arab Emirates",
    "Iran",
  ];

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,flags,population",
      {
        mode: "cors",
      }
    )
      .then((response) => {
        console.log("Response status:", response.status);
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        // Sort to prioritize specified countries
        const prioritizedData = [
          ...data.filter((country) =>
            priorityCountries.includes(country.name.common)
          ),
          ...data.filter(
            (country) => !priorityCountries.includes(country.name.common)
          ),
        ];
        setCountries(prioritizedData);
        setFilteredCountries(prioritizedData);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(filtered);
    setPage(1); // Reset page on search
  }, [query, countries]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const displayedCountries = filteredCountries.slice(0, page * itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Public API Explorer: Countries
        </h1>
        <SearchBar query={query} setQuery={setQuery} />
        {loading && <Spinner />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {displayedCountries.map((country) => (
                <CountryCard key={country.cca3} country={country} />
              ))}
            </div>
            {displayedCountries.length < filteredCountries.length && (
              <button
                onClick={handleLoadMore}
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mx-auto block"
              >
                Load More
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
