import React, {useEffect, useState} from 'react';

const useDataSource = getResourcefunc => {

    const [resource, setResource] = useState(null);

    useEffect(() => {
        (async () => {
            const result = await getResourcefunc();
            setResource(result.data);
        })()
    }, [])

    return resource;
};

export default useDataSource;