import React, {Component}from "react";


// function Greeting(props){
//     return (
//         <div>
//             <h2>Välkommen, {props.name} </h2>
//         </div>
//     );
// }

class Greeting extends Component{
    render(){
    return(
        <div>
            <h2> Välkommen, {this.props.name}</h2>
        </div>
    );
    
    }

}


export default Greeting;


