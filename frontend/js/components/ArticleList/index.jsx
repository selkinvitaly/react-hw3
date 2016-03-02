"use strict";

import React, {Component, PropTypes} from "react";
import Article from "../Article/";
// import Article from "../ArticleOld/";

class ArticleList extends Component {

  constructor() {
    super();
    this.state = {
      selected: {}
    };
  }

  selectHandler(id) {
    return e => {
      this.selectArticle(id);
    };
  }

  selectArticle(id) {
    let newState = this.state;

    newState.selected[id] = !newState.selected[id];
    this.setState(newState);
  }

  getArticles() {
    return this.props.articles.map(item =>
      <Article
        key={item.id}
        hint={item.hint}
        article={item}
        selectHandler={this.selectHandler(item.id)}
        selected={this.state.selected[item.id]}
      />
    );
  }

  render() {
    return <ul>{this.getArticles()}</ul>;
  }

}

ArticleList.propTypes = {
  articles: PropTypes.array
};

export default ArticleList;
