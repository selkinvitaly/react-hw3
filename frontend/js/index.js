"use strict";

import "../css/commons.styl";

import React from "react";
import ReactDOM from "react-dom";

import Container from "./components/Container/";

// import ArticleList from "./components/ArticleList/";

// let articles = [
//   {
//     title: "Title1",
//     body: "Lorem Ipsum1",
//     id: 1,
//     hint: "It's hint for the first article",
//     comments: [
//       { text: "comment1.1", id: 1 },
//       { text: "comment1.2", id: 2 }
//     ]
//   }, {
//     title: "Title2",
//     body: "Lorem Ipsum2",
//     id: 2,
//     hint: "It's hint for the second article",
//     comments: [
//       { text: "comment2.1", id: 1 },
//       { text: "comment2.2", id: 2 }
//     ]
//   }, {
//     title: "Title3",
//     body: "Lorem Ipsum3",
//     id: 3,
//     hint: "It's hint for the third article"
//   }, {
//     title: "Title4",
//     body: "Lorem Ipsum4",
//     id: 4,
//     hint: "It's hint for the fourth article",
//     comments: [
//       { text: "comment4.1", id: 1 },
//       { text: "comment4.2", id: 2 }
//     ]
//   }
// ];

// ReactDOM.render(<ArticleList articles={articles} />, document.querySelector("#app"));
ReactDOM.render(<Container />, document.querySelector("#app"));
