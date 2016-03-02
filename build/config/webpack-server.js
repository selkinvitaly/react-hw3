"use strict";

const path = require("path");

module.exports = function(root) {

  return {
    contentBase: path.join(root, "./dist"),
    hot: true,
    stats: { colors: true }
  };

};
