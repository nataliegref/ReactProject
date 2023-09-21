import React, { useState } from "react";


function Hello(){

    const [name, setName] = useState('')
    const [value, setValue] = useState('')
    const handleSubmit = (event) => {event.preventDefault();
        setName(value);
        setValue('');
    ;
    }

    return <form onSubmit = {handleSubmit}>
    <input type="text"
    value = {value}
    onChange={(event) => {
            setValue(event.target.value)
            setName(event.target.value)
        }}
    />
    <h1>Hello {name} </h1>
    </form>
}


export default Hello;