import React, {useState} from 'react';
import Modal from "../Modal";

const UncontrolledOnboardingFlow = ({children, onFinish, shouldShow, setShouldShow}) => {

    const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentChild = React.Children.toArray(children)[currentIndex];

    const goToNext = (stepData) => {

        const nextIndex = currentIndex + 1;
        const updateData = {...onboardingData, ...stepData};

        nextIndex < children.length ? setCurrentIndex(nextIndex):
            onFinish();
        setOnboardingData(updateData);
        console.log(updateData)
    }


    return (
        <>
            <Modal shouldShow={shouldShow} onRequestClose={setShouldShow}>
                {Object.keys(onboardingData).map(el=>(
                    <p key={el}>{el}: {onboardingData[el]}</p>
                ))}
            </Modal>
            {React.isValidElement(currentChild)
                ? React.cloneElement(currentChild, {goToNext}) : currentChild}
        </>
    );
};

export default UncontrolledOnboardingFlow;