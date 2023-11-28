import React from 'react';

const UserInfo = ({user}) => {
    console.log(user)
    const {age, name, hairColor, hobbies} = user || {};

    return user? (
        <>
            <h3>{name}</h3>
            <p>{age}</p>
            <p>{hairColor}</p>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies && hobbies.map(el => (
                    <li key={el}>{el}</li>
                ))}
            </ul>
        </>
    ): <p>Loading...</p>;
};

export default UserInfo;