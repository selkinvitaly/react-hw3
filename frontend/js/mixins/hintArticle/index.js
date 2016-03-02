"use strict";

import React from "react";

export default {

  getInitialState() {
    return {
      showedHint: false
    };
  },

  hoverHandler() {
    return e => {
      this.toggleHint();
    };
  },

  toggleHint() {
    this.setState({
      showedHint: !this.state.showedHint
    });
  },

  getHintStyle() {
    return {
      position: "absolute",
      top: 0,
      right: "-30px",
      display: this.state.showedHint ? "block" : "none",
      border: "1px solid #ccc",
      width: "150px",
      fontSize: 12/16 + "rem",
      padding: "5px 10px",
      borderRadius: "3px",
      background: "#f6f6f6"
    };
  },

  getHint() {
    return <p style={this.getHintStyle()}>{this.props.hint}</p>;
  }

};
