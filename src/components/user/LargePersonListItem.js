import React from 'react';

const LargePersonListItem = ({person}) => {
    const {age, name, hairColor, hobbies} = person;

    return (
        <>
            <h3>{name}</h3>
            <p>{age}</p>
            <p>{hairColor}</p>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies.map(el => (
                    <li key={el}>{el}</li>
                ))}
            </ul>
        </>
    );
};

export default LargePersonListItem;