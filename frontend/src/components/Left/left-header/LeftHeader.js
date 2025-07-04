import classes from "./index.module.css";
import {useState} from "react";
import {TbLogout} from "react-icons/tb";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function LeftHeader() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleLogOut() {
    setLoading(true);
    try {
      const response = axios.post("/user/logout");
      localStorage.removeItem("userInfo");
      Cookies.remove("jwt");
      setLoading(false);
      alert("Logged out successfully");
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Error logging out: " + error.message);
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