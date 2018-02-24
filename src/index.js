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
