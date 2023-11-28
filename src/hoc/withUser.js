import React, {useEffect, useState} from "react";
import axios from "axios";

const withUser = (Component, userId) => {
  return props => {
      const [user, setUser] = useState(null);

    useEffect(()=>{
      (async ()=>{
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      })()
    },[userId])

    return <Component {...props} user={user} />
  }
}

export default withUser