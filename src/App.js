import './App.css';
import Person from './components/Person';
import MyComponent from './components/MyComponent';
import Counter from './components/Counter';
import UseEffectEX from './components/UseEffectEx';
import DependencyArray from './components/DependencyArray';
import MyForm from './components/MyForm';
import Todos from './components/Todos';


function App() {
  return (
    <div className="App">
      {/* <MyForm/>
      <Function/> */}
      <Todos/>
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

// lära sig och förstå state i react 
// life time hooks (useeffect)
// förstå dependecy array i useeffext 
