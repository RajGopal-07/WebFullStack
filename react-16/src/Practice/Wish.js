import React from "react"
class Wish extends React.Component{
    state={
        message:"hello"
    }
    ChangeMessage = ()=>{
        this.setState({
            message:"good morning",
        })
        
    }
    ChangeMessageGA=() =>{
        this.setState({
            message:"good afternnon"
        })
    }
    render(){
        return(
            <>
            <h1>message:{this.state.message}</h1>
            <button onClick={this.ChangeMessage}>GM</button>
            <button onClick={this.ChangeMessageGA}>GA</button>
            </>
        )
    }
}
export default Wish;