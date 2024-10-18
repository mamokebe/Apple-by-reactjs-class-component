import React, { Component } from "react";

class HeaderLink extends Component {
  render() {
    let { linkName, name } = this.props;
    return (
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href={linkName}>
          {name}
        </a>
      </li>
    );
  }
}

export default HeaderLink;
