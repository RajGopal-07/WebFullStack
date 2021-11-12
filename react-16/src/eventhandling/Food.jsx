import React from "react";
class Food extends React.Component {
    state ={
        food:"no food" ,
    }
    breakfasthandler = ()=> {
        this.setState({food:"breakfast",})
    }
    launchhandler =() => {
        this.setState({food:"launch" ,})
    }
    dinnerhandler = ()=> {
        this.setState ({food:"dinner",})
    }
    render () {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-check form-check-inline">
                                <input type ="checkbox" onChange={this.breakfasthandler}/>
                                <label for="checkbox">breakfast</label>
                                <div className="form-check form-check-inline">
                                    <input type ="checkbox" onChange={this.launchhandler}/>
                                    <label for="checkbox">launch</label>
                                    <div className="form-check form-check-inline">
                                        <input type="checkbox" onChange={this.dinnerhandler}/>
                                        <lable for="checkbox">dinner</lable>

                                    </div>
                                    <div className="col-md-6">
                                        <pre>{JSON.stringify(this.state)}</pre>
                                        {this.state.food ==="breakfast" ? (
                                            <>
                                            {" "}
                                            <div className="card"></div>
                                            <div className="card-header"></div>
                                            <h2>breakfast</h2>
                                            <div className="card-body"></div>
                                            </>
                                        ) : null }
                                        {this.state.food ==="launch" ? (
                                            <>
                                            {" "}
                                            <div className="card"></div>
                                            <div className="card-header"></div>
                                            <h2>launch</h2>
                                            <div className="card-bodu"></div>
                                            </>

                                        ) :null}
                                           {this.state.food === "dinner" ?(
                                               <>
                                               {" "}
                                               <div className="card"></div>
                                               <div className="card-header"></div>
                                               <h2>dinnerr</h2>
                                               <div className="card-body"></div>
                                               </>

                                           ) :null}                         
                                        
                                    </div>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }















}
export default Food;


