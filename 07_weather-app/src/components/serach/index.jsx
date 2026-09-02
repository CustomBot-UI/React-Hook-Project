

export default function Search({ search, setSearch, handleSearch }) {
    return (<div className="search-engine">
        <input type="text"
            placeholder="Search..."
            name="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
            Search Weather
        </button>
        Search
    </div>);
}