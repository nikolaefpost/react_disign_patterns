import React, {useEffect, useState} from 'react';
import axios from "axios";

const useCurrentUser = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/current-user`);
            setUser(response.data);
        })()
    }, [])

    return user;
};

export default useCurrentUser;