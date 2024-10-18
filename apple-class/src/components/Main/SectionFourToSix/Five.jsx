import React, { Component } from "react";

class Five extends Component {
  render() {
    return (
      <div className="col-md-6">
        {/*<!-------- START: section five --------> */}
        <div className={this.props.fiveOne}>
          <div className={this.props.fiveTwo}>{this.props.fiveThree}</div>
          <div className={this.props.fiveFour}>{this.props.fiveFive}</div>

          <div className={this.props.fiveSix}>
            <div className="common-one comman-hover">
              {this.props.fiveSeven}
            </div>
            <div className="common-two comman-hover">
              {this.props.fiveSevenOther}
            </div>
            {this.props.fiveEight}
          </div>
        </div>
        {/* <!----------- END: section five ---------->*/}
      </div>
    );
  }
}

export default Five;
