import classes from "./index.module.css";
import LeftHeader from "./left-header/LeftHeader";
import Search from "./search/Search";
import Users from "./users/Users";

function Left() {
    return (
        <div className={classes.leftBox}>
            <LeftHeader />
            <Search />
            <Users />
        </div>
    );
}

export default Left;