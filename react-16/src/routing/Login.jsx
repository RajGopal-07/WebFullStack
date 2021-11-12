import React from "react"
class Login extends React.Component{
    state={
        email:"",
        password:"",
    }
    emailHandler=(event)=>{
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        this.setState({email:event.target.value})
    }
    passwordHandler=(event)=>{
        console.log(event.target.value)
        this.setState({password:event.target.value})
    }
    usernameHandler=(event)=>{
        console.log(event.target.value)
        this.setState({username:event.target.value})
    }
    render() {
        return(
            
            <div>
                <h1>Login component</h1>
                <pre>{JSON.stringify(this.state)}</pre>                
                <form style={{color:"red"}}>
                <label>username</label>
 <input type="text" onChange={this.usernameHandler}/> <br/>

                    <label>email</label>
                    <input type="text" onChange={this.emailHandler}/> <br/>
                    <label>password</label>
                    <input type="password" onChange={this.passwordHandler}/>
                   
                </form>
            </div>
            
        )
    }
}
export default Login;