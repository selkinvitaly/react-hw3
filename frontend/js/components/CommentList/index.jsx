"use strict";

import React, {Component, PropTypes} from "react";
import Comment from "../Comment/";
import { addComment } from "../../actions/comments";

class CommentList extends Component {

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

  addCommentHandler() {
    return e => {
      e.preventDefault();
      addComment(this.props.articleId, this.refs["input"].value || "");
    };
  }

  getShowedStyle() {
    return this.state.showed ? null : { display: "none" };
  }

  getEmptyStyle() {
    return { display: !this.props.comments.length ? "none" : "block" }
  }

  getComments() {
    return this.props.comments.map(comment => <Comment key={comment.id} text={comment.text} />);
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

    return <form onSubmit={this.addCommentHandler()}>
      <input ref="input" style={inputStyles} type="text" placeholder="Enter your comment" />
      <input style={submitStyles} type="submit" value="Submit" />
    </form>;
  }

  render() {
    return <div>
      <p style={this.getEmptyStyle()}><a onClick={this.toggleHandler()} href="#">show comments</a></p>
      <ul style={this.getShowedStyle()}>
        {this.getComments()}
      </ul>
      {this.getForm()}
    </div>
  }

}

CommentList.propTypes = {
  comments: PropTypes.array,
  articleId: PropTypes.number
};

export default CommentList;
