import React from 'react';

const UncontrolledForm = () => {
    const nameInput = React.createRef();
    const ageInput = React.createRef();
    const hairColorInput = React.createRef();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: nameInput.current.value,
            age: ageInput.current.value,
            hairColor: hairColorInput.current.value
        }
        console.log(newUser)
      
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name" ref={nameInput} />
            <input name="age" type="text" placeholder="Age" ref={ageInput} />
            <input name="hairColor" type="text" placeholder="HairColor" ref={hairColorInput} />
            <input  type="submit"value="Submit" />

        </form>
    );
};

export default UncontrolledForm;