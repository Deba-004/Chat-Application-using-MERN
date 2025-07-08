import classes from "./index.module.css";
import { IoSearch } from "react-icons/io5";

function Search({searchInput, setSearchInput}) {
  function handleSearch(event) {
    event.preventDefault();
    setSearchInput(searchInput.trim());
  }

  return (
    <div className={classes.container}>
      <form className={classes.searchForm} onSubmit={handleSearch}>
        <input
          className={classes.searchInput}
          name="name"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search"
          autoComplete="off"
        />
        <button type="submit" className={classes.searchBtn}>
          <IoSearch />
        </button>
      </form>
    </div>
  );
}

export default Search;