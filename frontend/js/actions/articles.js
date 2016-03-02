"use strict";

import AppDispatcher from "../dispatcher";
import { DELETE_ARTICLE } from "../consts";

export function deleteArticle(id) {
  AppDispatcher.dispatch({
    type: DELETE_ARTICLE,
    data: { id }
  });
};
