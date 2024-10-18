import React, { Component } from "react";

class OneToThree extends Component {
  render() {
    //destructuring
    // let {className1,className2,className3,parName,macText,trade,from,common1,common2,image}=this.props
    return (
      <section className={this.props.className1}>
        {/* <!-------- START: section one to three -----> */}
        <div className="container text-center">
          <div className={this.props.className2}>{this.props.parName}</div>
          <div className={this.props.className3}>{this.props.macText}</div>
          <div className={this.props.trade}>
            <p>{this.props.from}</p>
          </div>
          <div className="common-section">
            <div className={this.props.common1}>
              <a href="#">Learn more </a>
            </div>
            <div className={this.props.common2}>
              <a href="#">Buy </a>
            </div>
          </div>
          {this.props.image}
        </div>
        {/* <!-------- END: section one to three -------->*/}
      </section>
    );
  }
}

export default OneToThree;
