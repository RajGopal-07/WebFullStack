import React  from "react";
class LoginLogout extends React.Component {
    state={
        flag:false,
        message:"plzz log in",
    
    }
    login=() =>{
        this.setState ({flag:this.state.flag=true,message:"Login successfully"})  
    }
    logout =() =>{
            this.setState ({flag:this.state.flag=false ,message:"Logout successfully"})
        }
      
    render (){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1>{this.state.message}</h1>
                        {
                            !this.state.flag?<>
                            <button className="btn btn-danger" onClick={this.login}>login</button>
                            
                            </>:<><button className="btn btn-Success" onClick={this.logout}>logout</button>
                            </>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginLogout ;

