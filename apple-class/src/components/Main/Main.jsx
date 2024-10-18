import React, { Component } from "react";
import "./Main.css";
import SectionFourToSix from "./SectionFourToSix/SectionFourToSix";
import SectionOneToThree from "./SectionOneToThree/SectionOneToThree";
class Main extends Component {
  render() {
    return (
      <>
        <SectionOneToThree />
        <SectionFourToSix />
      </>
    );
  }
}

export default Main;
