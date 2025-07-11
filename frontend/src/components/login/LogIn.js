import classes from "./index.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../../store/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function LogIn() {
  const [authUser, setAuthUser] = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password
    };
    const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:5002";
    await axios
      .post(`${backendUrl}/user/login`, userInfo, {
        withCredentials: true
      })
      .then((response) => {
        console.log("Logged in successfully", response.data);
        if(response.data) {
          toast.success("Logged in successfully");
        }
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        console.error("Error logging in", error);
        if(error) {
          toast.error("Error logging in: " + error.response.data.message);
        }
      });
  };

  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-bold">Log In</h1>
          <input
            type="email"
            placeholder="Email"
            className={classes.input}
            {...register("email", { required: true })}
          />
          <input
            type="password"
            placeholder="Password"
            className={classes.input}
            {...register("password", { required: true })}
          />
          <button type="submit" className={classes.button}>Log In</button>
        </form>
        <p>Don't have an account? <Link to={"/signup"}>Sign Up</Link></p>
      </div>
    </div>
  );
}

export default LogIn;