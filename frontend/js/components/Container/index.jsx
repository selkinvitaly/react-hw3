"use strict";

import React, { Component, PropTypes } from "react";
import { articlesStore } from "../../stores/";
import ArticleList from "../ArticleList/";

class Container extends Component {

  constructor() {
    super();
    this.state = {
      articles: articlesStore.getAll()
    };
    this._changeHandler = null;
  }

  componentDidMount() {
    this._changeHandler = () => this.change();
    articlesStore.addChangeListener(this._changeHandler);
  }

  componentWillUnmount() {
    articlesStore.removeChangeListener(this._changeHandler);
  }

  render() {
    return (
      <div>
        <ArticleList articles = {this.state.articles} />
      </div>
    );
  }

  change() {
    this.setState({
      articles: articlesStore.getAll()
    })
  }

}

export default Container;
