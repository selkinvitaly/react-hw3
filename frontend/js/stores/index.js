"use strict";

import {articles, comments} from "../data";
import ArticleStore from "./ArticleStore"
import BaseStore from "./BaseStore"

let stores = {}
Object.assign(stores, {
  articles: new ArticleStore(stores, articles),
  comments: new BaseStore(stores, comments)
});

window.stores = stores

export const articlesStore = stores.articles;
export const commentStore = stores.comments;
