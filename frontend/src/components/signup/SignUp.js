import classes from "./index.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../../store/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function SignUp() {
  const [authUser, setAuthUser] = useAuth();
  const { register, handleSubmit, watch, formState: {errors} } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullName: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword
    };
    const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:5002";
    await axios
      .post(`${backendUrl}/user/signup`, userInfo,{
        withCredentials: true,
      })
      .then((response) => {
        console.log("User registered successfully", response.data);
        if(response.data) {
          toast.success("User registered successfully");
        }
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        console.error("Error registering user", error);
        if(error) {
          toast.error("Error registering user: " + error.response.data.message);
        }
      });
  };

  const validatePasswordMatch = () => {
    const password = watch("password");
    const confirmPassword = watch("confirmPassword");
    return password === confirmPassword || "Passwords do not match";
  }

  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-bold">Create New Account</h1>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Full Name"
            className={classes.input}
            autoComplete="off"
          />
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Email"
            className={classes.input}
          />
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
            className={classes.input}
            autoComplete="off"
          />
          <input
            type="password"
            {...register("confirmPassword", { required: true, validate: validatePasswordMatch })}
            placeholder="Confirm Password"
            className={classes.input}
            autoComplete="off"
          />
          {errors.confirmPassword && <span className="text-red-500 text-sm">Password do not match</span>}
          <button type="submit" className={classes.button}>Sign Up</button>
        </form>
        <p>Already have an account? <Link to={"/login"}>Log In</Link></p>
      </div>
    </div>
  );
}

export default SignUp;