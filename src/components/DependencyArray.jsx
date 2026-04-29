import React, { useState, useEffect } from 'react';

function DependencyArray() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    //körs varje gång count ändras
    useEffect(() =>{
        console.log("Count ändrades till: ", count);
    },[count])
    //Useeffect [vad ska hänta ?, vilken state ska jag kolla])

    useEffect(() => {
        console.log("Namn har ändrats: ", name);
    },[name])

    useEffect(() =>{
        console.log("Count eller name ändrades.");
    },[count, name])

    return (  
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            <input type='text' value={name} placeholder='skriv ditt namn' onChange={(e) => setName(e.target.value)}/>
        </div>
    );
}

export default DependencyArray;