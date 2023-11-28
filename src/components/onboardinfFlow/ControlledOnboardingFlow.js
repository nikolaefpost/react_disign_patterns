import React from 'react';

const ControlledOnboardingFlow = ({children, onFinish, currentIndex, goToNext}) => {
    const currentChild = React.Children.toArray(children)[currentIndex];

    return (
        <>
            {React.isValidElement(currentChild)
                ? React.cloneElement(currentChild, {goToNext}) : currentChild}
        </>
    );
};

export default ControlledOnboardingFlow;