"use strict";

class Model {

  constructor(data, stores) {
    Object.assign(this, data);
    this._stores = stores;
  }

  getRelation(relation) {
    const store = this._stores[relation];

    if (!this[relation] || !store) {
      return [];
    }

    return this[relation].map(id => store.getById(id));
  }

}

export default Model;
