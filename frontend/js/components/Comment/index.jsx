"use strict";

import React, {Component, PropTypes} from "react";

class Comment extends Component {

  render() {
    return <li>{this.props.text}</li>;
  }

}

Comment.propTypes = {
  text: PropTypes.string
};

export default Comment;
