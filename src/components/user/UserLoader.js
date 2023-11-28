import React, {useEffect, useState} from 'react';
import axios from "axios";

const UserLoader = ({userId, children}) => {

    const [user, setUser] = useState(null);

    useEffect(()=>{
        (async ()=>{
            const response = await axios.get(`/users/${userId}`);
            const currentUser = response.data;
            setUser(currentUser);
        })()
    },[userId])
    return (
        <>
            { React.Children.map(children, child => React.isValidElement(child)
                ? React.cloneElement(child, {user}): child)}
        </>
    );
};

export default UserLoader;