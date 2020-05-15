<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
=======
import React from 'react';
import { render } from 'react-dom';
import Test from './Test'
//import Hello from './Hello';
const shopping = [
  'eggs',
  'milk',
  'chicken'
];


const App = () => (
  <div style = {{textAlign: 'center', color: 'red'}} className ='Test'>
  <h1> My Shopping List </h1>
  <h3>Some subhead  </h3>
  <Test title="What to buy" shopping={shopping}/>
  </div>
);

render(<App />, document.getElementById('root'));
>>>>>>> 578f60c75765c78251a913eabe7a80ff8cfd173d
