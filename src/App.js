import './App.css';
import Person from './components/Person';
import MyComponent from './components/MyComponent';

function App() {


  
  const people = [
    { name: "Amin", age: 30 },
    { name: "Bob", age: 33 }
  ];

  function removePerson(name) {
    console.log("Ta bort person: " + name);
  }

  return (
    
    <div className="App">
      <MyComponent></MyComponent>


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