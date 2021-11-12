import React from "react"
import CompB from "./CompB"
class CompA extends React.Component{
    product ={
        Name:"Iphone 5s",
        price:55000 ,
        color :["gray","white","red"],
        image :
        "//rukminim1.flixcart.com/image/416/416/mobile/t/e/7/apple-iphone-6s-na-original-imaebymaz5exfapw.jpeg?q=70"
    };
    render(){
        return(
            <>
            <div classname ="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-heder">
                                <img src={this.product.image} alt="hello" />
                                </div>
                                <div className="card-body">
                  <h3>{this.product.Name}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
              <CompB one={this.product} />
                </div>
            </div>
            </div>
            </>
        );
        
        
    }
}
export default CompA ;



































