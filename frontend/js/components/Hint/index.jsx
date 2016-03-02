"use strict";

import React, {Component} from "react";

class Hint extends Component {

  getHintStyles() {
    return {
      position: "absolute",
      top: 0,
      right: "-30px",
      display: this.props.showed ? "block" : "none",
      border: "1px solid #ccc",
      width: "150px",
      fontSize: 12/16 + "rem",
      padding: "5px 10px",
      borderRadius: "3px",
      background: "#f6f6f6"
    };
  }

  render() {
    return (
      this.props.text ? <p style={this.getHintStyles()}>{this.props.text}</p> : null
    );
  }

}

export default Hint;
