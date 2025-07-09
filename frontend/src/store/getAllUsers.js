import { useState, useEffect } from 'react';
import axios from 'axios';

function useGetAllUsers() {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:5002";
                const response = await axios.get(`${backendUrl}/user/getUser`, {
                    withCredentials: true,
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