import React, { Component } from "react";

class Six extends Component {
  render() {
    return (
      <div className="col-md-6">
        {/*<!------ START section six --------> */}
        <div className={this.props.sixOne}>
          <div className={this.props.sixTwo}>{this.props.sixThree}</div>
          <div className={this.props.sixFour}>{this.props.sixFive}</div>
          <div className="section-six-text">{this.props.sixSix}</div>
          <div className={this.props.sixSeven}>
            <div className="common-one">
              <a href="#">Learn more </a>
            </div>
            <div className="common-two">
              <a href="#">Buy </a>
            </div>
          </div>
        </div>
        {/* <!------ END: section six --> */}
      </div>
    );
  }
}

export default Six;
