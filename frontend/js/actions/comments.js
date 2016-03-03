"use strict";

import AppDispatcher from "../dispatcher";
import { ADD_COMMENT } from "../consts";

export function addComment(articleId, text) {
  AppDispatcher.dispatch({
    type: ADD_COMMENT,
    data: { articleId, text }
  });
};
