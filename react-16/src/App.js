import React from "react";
import "./bootstrap.css";
import Carts from "./product/Carts";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends React.Component {
  render() {
    return(
      <>
     <Carts/>
      <h1>hello</h1>
      </>
    )
  }
}
export default App;