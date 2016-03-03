"use strict";

import {articles, comments} from "../data";
import ArticleStore from "./ArticleStore"
import CommentStore from "./CommentStore"

let stores = {}
Object.assign(stores, {
  articles: new ArticleStore(stores, articles),
  comments: new CommentStore(stores, comments)
});

export const articlesStore = stores.articles;
export const commentStore = stores.comments;
