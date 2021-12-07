import React from "react"
class Cart extends React.Component{
 render(){
        return(
            <>
           <pre>{JSON.stringify}</pre>
           <h2>Product_Name:{this.props.Product_Name}</h2>
           <h3>color:{this.props.color}</h3>
           <h4>price:{this.props.price}</h4>
           <h5>message:{this.props.message}</h5>
           
           
           
            </>
        )
    }
}
export default Cart;