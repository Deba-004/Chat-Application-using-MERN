import { useState } from "react";
import classes from "./index.module.css";
import LeftHeader from "./left-header/LeftHeader";
import Search from "./search/Search";
import Users from "./users/Users";
import LiveChat from "./live-chat/LiveChat";

function Left() {
    const [searchInput, setSearchInput] = useState("");

    return (
        <div className={classes.leftBox}>
            <LeftHeader />
            <Search searchInput={searchInput} setSearchInput={setSearchInput} />
            <Users searchInput={searchInput} />
            <LiveChat />
        </div>
    );
}

export default Left;