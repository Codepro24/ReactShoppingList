import "./App.css";
import React, { Component } from "react";
import ShoppingList from "./ShoppingList";

class App extends Component {
  render() {
    const date = new Date();
    return (
    <div>
      <h1>My Shopping List</h1>
      <h4 style={{fontStyle:'italic'}}>For the month {date.getMonth()} </h4>
      <ShoppingList title={`Groceries`} />
    </div>
    );
  }
}
export default App;
