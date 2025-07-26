function CountryCard({ country }) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white flex flex-col items-center">
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        className="w-20 h-12 object-cover mb-2"
      />
      <h3 className="text-lg font-semibold text-center">
        {country.name.common}
      </h3>
      <p className="text-gray-600 text-center">
        Capital: {country.capital?.[0] || "N/A"}
      </p>
      <p className="text-gray-600 text-center">
        Population: {country.population.toLocaleString()}
      </p>
    </div>
  );
}

export default CountryCard;
