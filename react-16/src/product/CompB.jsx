import React from "react"
class CompB extends React.Component{
    render(){
        return(
            <>
            <h1>Component B</h1>
            <pre>{JSON.stringify(this.props)}</pre>
            <h1>product name:{this.props.one.Name}<br/>price:{this.props.one.price}</h1>
            <img src={this.props.one.image} alt="jhoeduih" />
            </>

            
        )
    }
}
export default CompB ;