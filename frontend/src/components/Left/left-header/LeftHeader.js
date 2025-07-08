import classes from "./index.module.css";
import {TbLogout} from "react-icons/tb";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function LeftHeader() {
  const navigate = useNavigate();

  async function handleLogOut() {
    try {
      await axios.post("/user/logout");
      localStorage.removeItem("userInfo");
      Cookies.remove("jwt");
      toast.success("Logged out successfully");
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Error logging out: " + error.message);
    }
  }

  return (
    <div className={classes.container}>
      <h1 className="text-2xl font-bold">ChatBuddy</h1>
      <button className={classes.logoutBtn} title="Logout" onClick={handleLogOut}>
        <TbLogout />
      </button>
    </div>
  );
}

export default LeftHeader;