import React, { Component } from "react";

class Four extends Component {
  render() {
    return (
      <div className="col-md-6">
        {/* <!--------- START: section four ------> */}
        <div className={this.props.fourOne}>
          <div className={this.props.fourTwo}>
            <img src={this.props.fourThree} alt=""></img>
          </div>
          <div className="section-four-text">{this.props.fourFour}</div>
          <div className="common-section">
            <div className="common-one">
              <a href="#">Learn more </a>
            </div>
            <div className="common-two">
              <a href="#">Buy </a>
            </div>
          </div>
        </div>
        {/* <!-------- END: section four --------->*/}
      </div>
    );
  }
}

export default Four;
