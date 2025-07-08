import { useState } from "react";
import classes from "./index.module.css";
import LeftHeader from "./left-header/LeftHeader";
import Search from "./search/Search";
import Users from "./users/Users";

function Left() {
    const [searchInput, setSearchInput] = useState("");

    return (
        <div className={classes.leftBox}>
            <LeftHeader />
            <Search searchInput={searchInput} setSearchInput={setSearchInput} />
            <Users searchInput={searchInput} />
        </div>
    );
}

export default Left;