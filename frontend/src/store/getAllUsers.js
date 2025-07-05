import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

function useGetAllUsers() {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const token = Cookies.get("jwt");
                const response = await axios.get("/user/getUser", {
                    Credentials: "include",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setAllUsers(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);
    return [allUsers, loading];
}

export default useGetAllUsers;