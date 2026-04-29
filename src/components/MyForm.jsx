import React, { useState } from 'react';

function MyForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    function handleSubmit(e){

        e.preventDefault();

        //göra vad man vill med name, email
        console.log(name);
        console.log(email);

        //Tömma inputfält
        setName("");
        setEmail("");
    }

    return (  
    <form onSubmit={handleSubmit}>
        <div>
            <input type='text' value={name} onChange={handleNameChange} ></input>
            <input type='text' value={email} onChange={handleEmailChange}></input>
            <button type="submit">Submit</button>
        </div>
    </form>
    );
}

export default MyForm;