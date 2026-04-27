import './App.css';
import Greeting from './components/Greeting';
import Person from './components/Person';


function App() {
  //parent "äger datan"
  const people = [
    { name: "Amin", age: 30 },
    { name: "Bob", age: 33 }
  ];

  //deklarera en funktion som kan användas av child

  function removePerson(name){
    //logik för att ta bort en person
    console.log("ta bort person:" + name);
  }


  return (
    <div className="App">
      <h1>Lista över personer</h1>

      {people.map((person) => (
        <Person
          key={person.name}
          name={person.name}
          age={person.age}
          onRemove={removePerson}
        />
      ))}

  
    </div>
  );
}

export default App;


// parent skickar ner data till child via props 
// parent --> child
// app.js --> greeting, person.jsx

// skicka funktioner som child kan använda


// useState
// useEffect(Brukar kännas lite jobbig)