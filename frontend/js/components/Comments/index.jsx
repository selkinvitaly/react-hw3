"use strict";

import React, {Component, PropTypes} from "react";

class Comments extends Component {

  constructor() {
    super();
    this.state = {
      showed: false
    };
  }

  toggleHandler() {
    return e => {
      e.preventDefault();
      this.toggleComments();
    };
  }

  toggleComments() {
    this.setState({
      showed: !this.state.showed
    });
  }

  getShowedStyle() {
    return this.state.showed ? null : { display: "none" };
  }

  getComments() {
    return this.props.comments.map(comment =>
      <li key={comment.id}>
        {comment.text}
      </li>
    );
  }

  render() {
    return !this.props.comments.length ? null :
      <div>
        <p><a onClick={this.toggleHandler()} href="#">show comments</a></p>
        <ul style={this.getShowedStyle()}>
          {this.getComments()}
        </ul>
      </div>
  }

}

Comments.propTypes = {
  comments: PropTypes.array
};

export default Comments;
