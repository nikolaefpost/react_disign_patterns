import React, {useState} from 'react';
import UncontrolledOnboardingFlow from "./UncontrolledOnboardingFlow";
import Modal from "../Modal";
import ControlledOnboardingFlow from "./ControlledOnboardingFlow";



const StepOne = ({goToNext}) => (
    <>
        <h1> step 1</h1>
        <button onClick={()=>goToNext({name: "john Dou"})}>Next</button>
    </>
)
const StepTwo = ({goToNext}) => (
    <>
        <h1> step 2</h1>
        <button onClick={()=>goToNext({age: 22})}>Next</button>
    </>
)
const StepThree = ({goToNext}) => (
    <>
        <h1> step 3</h1>
        <button onClick={()=>goToNext({hairColor: "red"})}>Next</button>
    </>
)

const OnboardinfFlow = () => {
    const [shouldShow, setShouldShow] = useState(false);
    const [shouldShow2, setShouldShow2] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [onboardingData, setOnboardingData] = useState({});

    const goToNext = (stepData) => {

        const nextIndex = currentIndex + 1;
        const updateData = {...onboardingData, ...stepData};

        nextIndex < 3 ? setCurrentIndex(nextIndex):
            setShouldShow2(true);
        setOnboardingData(updateData);
        console.log(updateData)
    }

    return (
        <>
            <UncontrolledOnboardingFlow
                onFinish={()=>setShouldShow2(true)} shouldShow={shouldShow} setShouldShow={setShouldShow}>
                <StepOne/>
                <StepTwo/>
                <StepThree/>
            </UncontrolledOnboardingFlow>
            <ControlledOnboardingFlow goToNext={goToNext} currentIndex={currentIndex}>
                <StepOne/>
                <StepTwo/>
                <StepThree/>
            </ControlledOnboardingFlow>
            <Modal shouldShow={shouldShow2} onRequestClose={setShouldShow2}>
                {Object.keys(onboardingData).map(el=>(
                    <p key={el}>{el}: {onboardingData[el]}</p>
                ))}
            </Modal>

        </>
    );
};

export default OnboardinfFlow;