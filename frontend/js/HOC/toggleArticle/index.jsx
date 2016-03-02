"use strict";

import React, {Component} from "react";

export default function(CustomComponent) {
  return class extends Component {

    constructor() {
      super();
      this.state = {
        showed: false
      };
    }

    toggleHandler() {
      return e => {
        this.toggleArticle();
      };
    }

    toggleArticle() {
      this.setState({
        showed: !this.state.showed
      });
    }

    render() {
      return <CustomComponent
        {...this.props}
        toggleHandler={this.toggleHandler()}
        showed={this.state.showed}
      />
    }

  };
};
