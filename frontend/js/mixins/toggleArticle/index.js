"use strict";

export default {

  getInitialState() {
    return {
      showed: false
    };
  },

  toggleHandler() {
    return e => {
      this.toggleArticle();
    };
  },

  toggleArticle() {
    this.setState({
      showed: !this.state.showed
    });
  }

};
