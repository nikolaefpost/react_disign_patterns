import React from 'react';
import {withEditableUser} from "./withEditableUser";


const withUserInfoForm  = (userId) => withEditableUser(({user, onChangeUser, OnSaveUser, onResetUser}) => {
    const {age, name, hairColor} = user || {};

    return user ? (
        <div>
            <label form="name">
                Name
                <input name="name" value={name} onChange={e => onChangeUser({name: e.target.value})}/>
            </label>
            <label form="age">
                Age
                <input name="age" value={age} onChange={e => onChangeUser({age: e.target.value})}/>
            </label>
            <label form="hairColor">
                HairColor
                <input name="hairColor" value={hairColor} onChange={e => onChangeUser({hairColor: e.target.value})}/>
            </label>
            <button onClick={OnSaveUser}>Save</button>
            <button onClick={onResetUser}>Reset</button>

        </div>
    ) : <p>Loading...</p>
}, userId)

export default withUserInfoForm;