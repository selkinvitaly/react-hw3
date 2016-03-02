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

  getForm() {
    const inputStyles = {
      border: "1px solid #ccc",
      borderRadius: "3px",
      height: "25px",
      padding: "0 10px",
      display: "block",
      backgroundColor: "#fff",
      margin: "5px 0"
    };

    const submitStyles = {
      border: "1px solid #6f91be",
      borderRadius: "3px",
      height: "25px",
      width: "100px",
      fontWeight: "bold",
      color: "#fff",
      padding: "0 10px",
      display: "block",
      backgroundColor: "#2385b5"
    };

    return <form>
      <input style={inputStyles} type="text" placeholder="Enter your comment" />
      <input style={submitStyles} type="submit" value="Submit" />
    </form>;
  }

  render() {
    return !this.props.comments.length ? null :
      <div>
        <p><a onClick={this.toggleHandler()} href="#">show comments</a></p>
        <div style={this.getShowedStyle()}>
          <ul>
            {this.getComments()}
          </ul>
          {this.getForm()}
        </div>
      </div>
  }

}

Comments.propTypes = {
  comments: PropTypes.array
};

export default Comments;
