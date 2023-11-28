import React, {useEffect, useState} from 'react';
import axios from "axios";

const ResourceLoader = ({resourceUrl, resourceName, children}) => {
    const [state, setState] = useState(null);

    useEffect(()=>{
        (async ()=>{
            const response = await axios.get(resourceUrl);
            setState(response.data);
        })()
    },[resourceUrl])
    return (
        <>
            { React.Children.map(children, child => React.isValidElement(child)
                ? React.cloneElement(child, {[resourceName]: state}): child)}
        </>
    );
};

export default ResourceLoader;