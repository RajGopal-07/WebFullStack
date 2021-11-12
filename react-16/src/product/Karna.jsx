import React from "react"
class Karna extends React.Component {
    state = {
        product_name :"Bow and arrow",
        price:' 49999',
       image :
      " https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/7290/77290-h",
        qty : 1 ,

    } ;
decrHandler = ()=> {
    if(this.state.qty===0){
        return this.state.qty
    }
    this.setState({qty: this.state.qty - 1});
};
incrHandler = ()=> {
    this.setState({qty: this.state.qty + 1});
};
render (){
    return (
        <React.Fragment>
            <div className="container mt-5"></div>
            <div className="row"></div>
            <div className="col md-6"></div>
            <table class="table table-bordered table-dark" > 
            <thead style={{color:"red"}}>
                <tr>
                    <th>product Name</th>
                    <th> image</th>
                    <th>price</th>
                    <th>Qty</th>
                    <th>total price</th>

                </tr>
            </thead>
            <tbody style={{color:"skyblue"}}>
                <tr>
                    <td>{this.state.product_name}</td>
                    <td>
                        <img src={this.state.image}alt="Bow and Arrow" height="80%" />
                    </td>
                    <td>{this.state.price}</td>
                    <td>
                     
                        <i class ="Fas Fa-minus-circle"
                        onClick={this.decrHandler}
                        >

                        </i>
                        {this.state.qty}
                        <i class ="Fas Fa-plus-circle"
                        onClick={this.incrHandler}
                        >

                        </i>
                    </td>
                    <td>{this.state.price*this.state.qty}</td>
                </tr>
            </tbody>
            </table>

            
        </React.Fragment>
    )
    }
}
export default Karna ;




























































