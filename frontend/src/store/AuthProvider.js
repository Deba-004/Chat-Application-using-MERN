import { useContext, useState } from "react";
import AuthContext from "./Auth-context";
import Cookies from "js-cookie";

export function AuthProvider({ children }) {
    const initialUserState = Cookies.get("jwt") || localStorage.getItem("userInfo");
    const [authUser, setAuthUser] = useState(initialUserState ? JSON.parse(initialUserState) : null);

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);