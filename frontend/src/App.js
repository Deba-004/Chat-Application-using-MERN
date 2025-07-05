import Left from "./components/Left/Left";
import LogIn from "./components/login/LogIn";
import Right from "./components/Right/Right";
import SignUp from "./components/signup/SignUp";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {!isLoggedIn && <SignUp />}
      {!isLoggedIn && <LogIn />}
      {isLoggedIn && <div className="flex h-screen">
        <Left />
        <Right />
      </div>}
    </>
  );
}

export default App;