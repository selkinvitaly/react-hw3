"use strict";

import React, {Component} from "react";
import Hint from "../../components/Hint";

export default function(CustomComponent) {
  return class extends Component {

    constructor() {
      super();
      this.state = {
        showedHint: false
      };
    }

    hideHintHandler() {
      return e => {
        this.setState({
          showedHint: false
        });
      };
    }

    showHintHandler() {
      return e => {
        this.setState({
          showedHint: true
        });
      };
    }

    getHint(text) {
      return <Hint showed={this.state.showedHint} text={text} />;
    }

    render() {
      return (
        <CustomComponent
          {...this.props}
          getHint={this.getHint.bind(this)}
          showHintHandler={this.showHintHandler()}
          hideHintHandler={this.hideHintHandler()}
        />
      );
    }

  };
};
