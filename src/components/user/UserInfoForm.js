import React from 'react';
import {withEditableUser} from "../../hoc/withEditableUser";
import {withEditableResource} from "../../hoc/withEditableResource";


export const UserInfoFormId  = withEditableUser(({user, onChangeUser, onSaveUser, onResetUser}) => {
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
            <button onClick={onSaveUser}>Save</button>
            <button onClick={onResetUser}>Reset</button>

        </div>
    ) : <p>Loading...</p>
}, 1)

export const UserInfoFormResource  = withEditableResource(({user, onChangeUser, onSaveUser, onResetUser}) => {
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
            <button onClick={onSaveUser}>Save</button>
            <button onClick={onResetUser}>Reset</button>

        </div>
    ) : <p>Loading...</p>
}, "/users/3", "user")