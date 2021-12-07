import React from "react"
class Assignment extends React.Component{
    state={
        count:5,
        message:"Hii"
    }
    update=(event)=>{
        this.setState({
            count:event.target.value.length
        })
    }
    
    render(){
        
        return(
            <div>
                <form>
                <section>
                    <pre>{JSON.stringify}</pre>
                <p className="text center">Remaining:{this.state.count}</p>
                <input type="text" onChange={this.update}/><br></br>
                <button>click</button>
                </section>
                </form>

            </div>

        )
    }
}
export default Assignment;