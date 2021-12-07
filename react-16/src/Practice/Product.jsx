import React from "react"
import Cart from "./Cart"
class Product extends React.Component{
    Product_Name="Iphone-5s";
    color=["red","white","black"]
    price=45000;
    render(){
        return(
            <>
            <Cart 
            message="hello gm"
            Product_Name={this.Product_Name}
            price={this.price}
           color={this.color[1]}/>
            </>
        )
    }
}
export default Product;