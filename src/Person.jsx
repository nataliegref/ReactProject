// import React, { useState } from "react";

// function CustomInput(person) {
//     const [value, setValue] = useState('');
//     return (
//        <input
//           type="text"
//           value={value}
//           onChange={(event) => {
//             setValue(event.target.value)
//             setPerson({ ...person, name: value })
//         }}
//        />
//     );
//  }

// function Person() {
//     const [person, setPerson] = useState({ name: 'John', age: 30 });
    
//     const handleIncreaseAge = () =>{
//        setPerson({ ...person, age: person.age + 1 });
//     }
//     const handleNameChange = (newName) => {
//         setPerson({ ...person, name: newName });
//       };

    
//     return (
//        <>
//           <h2>{person.name}</h2>
//           <h2>{person.age}</h2>
//           <form>First Name <CustomInput person={person} /></form>
//           <form>Last Name <CustomInput person={person}/></form>
//           <button onClick={handleIncreaseAge}>Increase age</button>
//        </>
//     )
//  } 
 
//  export default Person;

import React, { useState } from "react";

function CustomInput({ person, onNameChange }) {
  const handleNameChange = (event) => {
    const newName = event.target.value;
    onNameChange(newName);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleNameChange}
    />
  );
}

function Person() {
  const [person, setPerson] = useState({ firstName: 'John', lastName:'', age: 30 });

  const handleFirstNameChange = (newName) => {
    setPerson({ ...person, firstName: newName });
  };

  const handleLastNameChange = (newName) => {
    setPerson({ ...person, lastName: newName });
  };

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  }

  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <form>First Name <CustomInput person={person} onNameChange={handleFirstNameChange} /></form>
      <form>Last Name <CustomInput person={person} onNameChange={handleLastNameChange} /></form>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  )
}

export default Person;



