import React from 'react';

class Assignment extends React.Component{
    state={
        count:5,
        message:"hello",
    }
    update=(event)=>{
        this.setState({
            count:event.target.value.length
        })
    }
    render(){
        return(
            <React.Fragment>
                     <p>Remaining:{this.state.count}</p>
                     <input type="text" onChange={this.update}/><br></br>
                     <button>click</button>
            </React.Fragment>
        )
    }
}
export default Assignment;