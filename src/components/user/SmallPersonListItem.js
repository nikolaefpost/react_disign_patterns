import React from 'react';

const SmallPersonListItem = ({person}) => {
    const {age, name, } = person;

    return (
        <p>Name: {name}, Age: {age} </p>
    );
};

export default SmallPersonListItem;