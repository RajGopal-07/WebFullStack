import React from "react"
import './bootstrap.css';  
import Home from "./NewProject/Home"
import Cart from "./NewProject/Cart";
import {CartProvider} from "react-use-cart"
import Passwordcheck from "./assigment/Passwordcheck";
import Product from "./Practice/Product";
import Navbar from "./Practice/Navbar";
import Wish from "./Practice/Wish";
class App extends React.Component{
  render(){
    return(
      <div>
       <CartProvider>
        <h1 className="text-center">E CART </h1>
        <Home/>
        <Cart/>
        </CartProvider>
        <hr/>
       <Passwordcheck/>
       <hr/>
       <Product/>
       <hr/>
       <Navbar/>
       <Wish/>
       <hr/>
      </div>
    )
  }
}
export default App;



