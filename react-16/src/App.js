import React from "react"

import Facebook from "./component/Fcaebook"
class App extends React.Component{
  render(){
    return(
      <div>
        <h1 className="App-title">Facebook Auth Example</h1>
        <Facebook/>
      </div>
    )
  }
}
export default App;



