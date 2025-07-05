import classes from "./index.module.css";
import {TbLogout} from "react-icons/tb"

function LeftHeader() {
  return (
    <div className={classes.container}>
      <h1 className="text-2xl font-bold">ChatBuddy</h1>
      <button className={classes.logoutBtn} title="Logout">
        <TbLogout />
      </button>
    </div>
  );
}

export default LeftHeader;