import classes from "./index.module.css";
import { IoSearch } from "react-icons/io5"

function Search() {
  return (
    <div className={classes.container}>
      <form className={classes.searchForm}>
        <input
          className={classes.searchInput}
          name="name"
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