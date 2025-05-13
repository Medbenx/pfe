import "../styles/SearchForm.css";

export default function SearchForm() {
  return (

    <div className="searchBox">
      <input type="text" placeholder="Destination" />
      <input type="date" placeholder="Check-in Date" />
      <input type="date" placeholder="Check-out Date" />
      <input type="number" placeholder="Price Limit ($)" />
      <button>Search</button>
    </div>
  );
}
