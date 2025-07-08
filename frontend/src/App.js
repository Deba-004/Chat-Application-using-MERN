import Left from "./components/Left/Left";
import LogIn from "./components/login/LogIn";
import Right from "./components/Right/Right";
import SignUp from "./components/signup/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./store/AuthProvider";
import { Toaster } from "react-hot-toast";

function App() {
  const [authUser] = useAuth();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen">
                <Left />
                <Right />
              </div>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to={"/"} /> : <SignUp />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <LogIn />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;