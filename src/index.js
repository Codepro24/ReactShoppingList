import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// const shopping = [
//   'eggs',
//   'milk',
//   'chicken'
// ];

// let date = new Date();

// const App = () => {
//   return (
//     <div style = {{textAlign: 'center', color: 'red'}} className ='Test'>
//   <h1> My Shopping List </h1>
//   <h3>For {date.getMonth().toString()}  only!  </h3>
//   <Test title="What to buy" shopping={shopping}/>
//   </div>
//   );
// }

ReactDOM.render(<App />, document.getElementById("root"));
