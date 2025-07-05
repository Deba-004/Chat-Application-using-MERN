import Left from "./components/Left/Left";
import Right from "./components/Right/Right";
import SignUp from "./components/signup/SignUp";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <>
      {!isLoggedIn && <SignUp handleLogin={handleLogin} />}
      {isLoggedIn && <div className="flex h-screen">
        <Left />
        <Right />
      </div>}
    </>
  );
}

export default App;