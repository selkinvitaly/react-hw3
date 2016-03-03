"use strict";

import BaseStore from "./BaseStore";
import { ADD_COMMENT } from "../consts";
import AppDispatcher from "../dispatcher";

class CommentStore extends BaseStore {

  constructor(...args) {
    super(...args);

    AppDispatcher.register(action => {
      const { type, data } = action;

      switch (type) {
        case ADD_COMMENT:

          let nextId  = this.getNextIndex();
          let article = this.getArticleByArticleId(data.articleId);

          article.comments = article.comments || [];
          article.comments.push(nextId);

          this.add({
            id: nextId,
            text: data.text
          });
          // this.emitChange();
          break;
      }
    });
  }

  getNextIndex() {
    return this._items[this._items.length - 1].id + 1;
  }

  getArticleByArticleId(articleId) {
    let store = this._stores.articles;

    for (let i = 0, len = store._items.length; i < len; i++) {
      let article = store._items[i];

      if (article.id === articleId) {
        return article;
      }

    }
  }

}

export default CommentStore;
