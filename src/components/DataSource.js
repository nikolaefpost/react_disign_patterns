import React, {useEffect, useState} from 'react';

const DataSource = ({getDataFunction, resourceName, children}) => {
    const [state, setState] = useState(null);

    useEffect(()=>{
        (async ()=>{
            const data = getDataFunction();
            setState(data);
        })()
    },[getDataFunction])
    return (
        <>
            { React.Children.map(children, child => React.isValidElement(child)
                ? React.cloneElement(child, {[resourceName]: state}): child)}
        </>
    );
};

export default DataSource;