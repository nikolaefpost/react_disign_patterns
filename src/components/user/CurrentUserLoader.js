import React, {useEffect, useState} from 'react';
import axios from "axios";

const CurrentUserLoader = ({children}) => {

    const [user, setUser] = useState(null);

    useEffect(()=>{
        (async ()=>{
            const response = await axios.get("/current-user");
            const currentUser = response.data;
            setUser(currentUser);
        })()
    },[])
    return (
        <>
            { React.Children.map(children, child => React.isValidElement(child)
                ? React.cloneElement(child, {user}): child)}
        </>
    );
};

export default CurrentUserLoader;