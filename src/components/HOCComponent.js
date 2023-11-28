import React from 'react';
import UserInfo from "./user/UserInfo";
import withUser from "../hoc/withUser";
import {UserInfoFormId, UserInfoFormResource} from "./user/UserInfoForm";
import withUserInfoForm from "../hoc/withUserInfoForm";

// import userInfoForm from "../hoc/userInfoForm";

const UserInfoWrapped = withUser(UserInfo, "1");

const User2 = withUserInfoForm(2)

const HocComponent = () => {

    return (
        <>
            <UserInfoWrapped />
            <UserInfoFormId/>
            <User2/>
            <UserInfoFormResource/>
        </>
    );
};

export default HocComponent;