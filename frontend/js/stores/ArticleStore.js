"use strict";

import BaseStore from "./BaseStore";
import { DELETE_ARTICLE } from "../consts";
import AppDispatcher from "../dispatcher";

class ArticleStore extends BaseStore {

  constructor(...args) {
    super(...args);

    AppDispatcher.register(action => {
      const { type, data } = action;

      switch (type) {
        case DELETE_ARTICLE:
          this.delete(data.id);
          this.emitChange();
          break;
      }
    });
  }

}

export default ArticleStore;
