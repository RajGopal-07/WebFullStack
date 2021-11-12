import React from "react";
class Kolar extends React.Component {
  constructor(x) {
    super(x);
    this.state = {
      msg: "Hello",
    };
  }
  updateMessageHandler = (newmsg,a,b,c) => {
    console.log(a);
    this.setState({ msg:newmsg });
  };
  render() {
    return (
      <>
        <h1>Message : {this.state.msg}</h1>
        <button
          onClick={this.updateMessageHandler.bind(
            this,
            "Good Morning",
            {},
            [],
            [{}, {}]
          )}
        >
            
          GM 
        </button>
        <button onClick={this.updateMessageHandler.bind(this, "GN")}>
          GN
        </button>

        <button
          onClick={this.updateMessageHandler.bind(this, "GA ..go for lunch")}
        >
          GA
        </button>
      </>
    );
  }
}

export default Kolar;