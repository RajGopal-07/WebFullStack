import React from "react"
class Kush extends React.Component{
    state={
        message:"hello" ,
    };
    state={
        message:"hii" ,
    };
    state={
        message:"how r u" ,
    };
    gmHandler =() => {
        this.setState({message:"good morning"}) ;
    }
    
    gaHandler = ()=> {
        this.setState ({message : "good afternoon"})
    } ;
    gnHandler = () => {
        this.setstate ({message: "good night"})
    } ;
    render () {
        return (
            <>
            <div className="container"></div>
            <div className="row"></div>
            <div className="col-md-4"></div>
            <div className="card"></div>
            <div className="card-header"></div>
            <div className="card-body"></div>
            <h3 >message :{this.state.message}</h3>
           

            <button 
             className= "btn btn-primary"
            onclick={this.gmHandler}>
                GM

            </button>
            <button  
            className ="btn btn-info"
            onclick ={this.gaHandler}>
                GA

            </button>
            <button
            className = "btn btn-danger mr-3"
            onclick ={this.gnHandler}>
                GN

            </button>
            </>

        )
    }
}
export default Kush ;  