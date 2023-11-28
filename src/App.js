import React, {useState} from 'react';
import './App.css';
import RegularList from "./components/RegularList";
import SmallPersonListItem from "./components/user/SmallPersonListItem";
import LargePersonListItem from "./components/user/LargePersonListItem";
import ProductInfo from "./components/products/ProductInfo";
import NumberedList from "./components/NumberedList";
import Modal from "./components/Modal";
import UserInfo from "./components/user/UserInfo";
import UserLoader from "./components/user/UserLoader";
import ResourceLoader from "./components/ResourceLoader";
import DataSource from "./components/DataSource";
import axios from "axios";
import UncontrolledForm from "./components/UncontrolledForm";
import OnboardinfFlow from "./components/onboardinfFlow";
import styled from "styled-components";
import HocComponent from "./components/HOCComponent";
import useCurrentUser from "./hooks/useCurrentUser";
import useDataSource from "./hooks/useDataSource";
import RecursiveComponent from "./components/RecursiveComponent";
import {nestedObject} from "./data"
import {DangerButton} from "./helpers/composition";

const Content = styled.div`
 margin: 24px;
`;


const people = [{
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", " bicycling", "video game"]
}, {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", " mathematics"]
}, {
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", " medicine", "gymnastics"]
}]

const products = [{
    name: "Flat-Screen TV",
    prise: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5
}, {
    name: "Basketball",
    prise: "$10",
    description: "Just like the pros use",
    rating: 3.8
}, {
    name: "Running Shoes",
    prise: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2
}]

const getServerData =  (resourceUrl) => async() => (await axios.get(resourceUrl)).data;

const getLocalStorageData = key => () => localStorage.getItem(key);
const Text = ({message}) => <h1>{message}</h1>;




const LeftHandComponent = () => {
    return (
        <>
            <h1>Left</h1>
            <NumberedList
                items={people}
                resourceName="person"
                itemComponent={SmallPersonListItem}
            />
            <RegularList
                items={people}
                resourceName="person"
                itemComponent={LargePersonListItem}
            />
        </>

    )
}

const RightHandComponent = ({message}) => {
    return (<>
            <h1>{message}</h1>
            <RegularList
                items={products}
                resourceName="product"
                itemComponent={ProductInfo}
            />
        </>
    )
}

function App() {
    const currentUser = useCurrentUser();
    const [shouldShow, setShouldShow] = useState(false);

    const getResourcefunc = async () => await axios.get(`/current-user`);
    const currentResourceUser = useDataSource(getResourcefunc)
    return (
        <Content>
            <Text message={getLocalStorageData("message")()}/>
            <button type="button"  onClick={() => setShouldShow(pre=>!pre)}>Show Modal</button>
            <Modal shouldShow={shouldShow} onRequestClose={setShouldShow}>
                <RegularList
                    items={products}
                    resourceName="product"
                    itemComponent={ProductInfo}
                />
            </Modal>
            {/*<SplitScreen leftWeight={2}>*/}
            {/*    <LeftHandComponent/>*/}
            {/*    <RightHandComponent message="RightHandComponent"/>*/}
            {/*</SplitScreen>*/}
            {/*<CurrentUserLoader>*/}
            {/*    <UserInfo/>*/}
            {/*    Help*/}
            {/*</CurrentUserLoader>*/}
            <UserLoader userId="2">
                <UserInfo/>
            </UserLoader>
            <ResourceLoader resourceUrl="/users/3" resourceName="user">
                <UserInfo/>
            </ResourceLoader>

            <ResourceLoader resourceUrl="/products/3" resourceName="product">
                <ProductInfo/>
            </ResourceLoader>
            <DataSource getDataFunction={getServerData("/products/2")} resourceName="product" >
                <ProductInfo/>
            </DataSource>
            <DataSource getDataFunction={getLocalStorageData("message")} resourceName="message" >
                <Text/>
            </DataSource>
            <UncontrolledForm/>
            <OnboardinfFlow/>
            <HocComponent/>
            {/*<UserInfo user={currentUser}/>*/}
            <UserInfo user={currentResourceUser}/>
            <RecursiveComponent data={nestedObject}/>
            <DangerButton text="Edit Button"  size="large"/>
        </Content>
    )
}

export default App;