// import React, { Component } from 'react';
// class Person extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <div>
//                 <h1>hello person, {this.props.name}</h1>
//             </div>
//         );
//     }
// }
 
// export default Person;

import React from 'react';

function Person({ name, age, onRemove }) {

  function handleRemove() {
    onRemove(name);
  }

  return (
    <div>
      <h2>Namn: {name}</h2>
      <p>Ålder: {age}</p>
      <button onClick={handleRemove}>Ta bort personen</button>
    </div>
  );
}

export default Person;