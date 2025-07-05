import classes from "./index.module.css";

function SignUp({ handleLogin }) {
  function loginHandler(event) {
    event.preventDefault();
    handleLogin();
  }

  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <form className={classes.form}>
          <h1 className="text-2xl font-bold">Create New Account</h1>
          <input type="text" placeholder="Full Name" className={classes.input} />
          <input type="email" placeholder="Email" className={classes.input} />
          <input type="password" placeholder="Password" className={classes.input} />
          <input type="password" placeholder="Confirm Password" className={classes.input} />
          <button type="submit" className={classes.button}>Sign Up</button>
        </form>
        <p>Already have an account? <a href="/" onClick={(e) => loginHandler(e)}>Log In</a></p>
      </div>
    </div>
  );
}

export default SignUp;