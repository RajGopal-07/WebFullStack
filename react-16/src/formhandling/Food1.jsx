
import React from "react";

class Food1 extends React.Component {
  imageone =
    "data:image/jpeg;base64,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";
   
  state = {
    food: "no food",
    breakfast: false,
    lunch: false,
    dinner: false,
  };
  breakHandler = () => {
    this.setState({
      food: "breakfast",
      breakfast: true,
    });
  };
  lunchHandler = () => {
    this.setState({
      food: "lunch",
      lunch: true,
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="form-check form-check-inline">
                <input type="checkbox" onChange={this.breakHandler} />
                <label for="checkbox3">Break Fast</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" onChange={this.lunchHandler} />
                <label for="checkbox3">Lunch</label>
              </div>
            </div>
            <div className="col-md-8">
              <pre>{JSON.stringify(this.state)}</pre>
              {this.state.breakfast === true ? (
                <>
                  {" "}
                  <div className="card">
                    <div className="card-header">
                      <h2>Break Fast</h2>
                    </div>
                    <div className="card-body">
                      <img src={this.imageone} />
                    </div>
                  </div>
                </>
              ) : null}
              {this.state.lunch === true ? (
                <>
                  {" "}
                  <div className="card">
                    <div className="card-header">
                      <h2>Lunch</h2>
                    </div>
                    <div className="card-body"></div>
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Food1;