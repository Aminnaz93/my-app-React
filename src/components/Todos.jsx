import React, { useState, useEffect } from 'react';


//Todos
//SökFält input
//visa upp resultat

function Todos() {

    const [todos, setTodos] = useState([]); //ursprungslista
    const [filter, setFilter] = useState([]); //Filter, baserat på search välja ut passande todos
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState(""); // <-- FIX

    useEffect(() =>{
        console.log("Hämtar todos");

        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
            if(!res.ok){
                throw new Error("Något gick fel med API:et");
            }
            return res.json();
        })
        .then((data) =>{
            setTodos(data);
            setFilter(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });

    },[]);

    //https://jsonplaceholder.typicode.com/todos

    //Steg 2 filtrera baserat på search
    useEffect(() => {
        const result = todos.filter((todo) =>
            todo.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilter(result);
    },[search, todos]);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>

    return (  
        <div>
            <h1>TODOS</h1>
            <input 
                type='text' 
                placeholder='Sök todo...' 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
            />

            {filter.map((todo) => (
                <div key={todo.id}>
                    <h3>{todo.title}</h3>
                    <p>{todo.completed.toString()}</p>
                </div>
            ))}
        </div>

    );
}

export default Todos;