"use strict";

import React, {Component, PropTypes} from "react";
import Comments from "../Comments/";
import HOCtoggle from "../../HOC/toggleArticle/";
import HOChint from "../../HOC/hintArticle/";
import { deleteArticle } from "../../actions/articles";

class Article extends Component {

  selectHandler() {
    return e => {
      e.preventDefault();
      this.props.selectHandler();
    };
  }

  getSelectedStyle() {
    return this.props.selected ? { color: "brown" } : null;
  }

  getShowedStyle() {
    return this.props.showed ? null : { display: "none" };
  }

  getTitle() {
    return <h2 onClick={this.props.toggleHandler} style={this.getSelectedStyle()}>
      {this.props.article.title}
    </h2>
  }

  deleteHandler() {
    return e => {
      e.preventDefault();
      deleteArticle(this.props.article.id);
    };
  }

  getBody() {
    return <div>
        <p><a href="#" onClick={this.deleteHandler()}>delete article</a></p>
        <p>{this.props.article.body}</p>
      </div>;
  }

  getComments() {
    return <Comments comments={this.props.article.getRelation("comments")} />;
  }

  render() {
    return (
      <li
        onMouseEnter={this.props.showHintHandler}
        onMouseLeave={this.props.hideHintHandler}
        style={{position: "relative"}}
      >
        {this.props.getHint(this.props.hint)}
        {this.getTitle()}
        <div style={this.getShowedStyle()}>
          {this.getBody()}
          <p><a onClick={this.selectHandler()} href="#">select</a></p>
          {this.getComments()}
        </div>
      </li>
    );
  }

}

Article.propTypes = {
  article: PropTypes.object,
  selectHandler: PropTypes.func,
  toggleHandler: PropTypes.func,
  getHint: PropTypes.func,
  hideHintHandler: PropTypes.func,
  showHintHandler: PropTypes.func,
  showed: PropTypes.bool,
  selected: PropTypes.bool
};

export default HOChint(HOCtoggle(Article));
