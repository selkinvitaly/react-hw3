"use strict";

import { EventEmitter } from "events";
import Model from "./Model";

const CHANGE_EVENT = "change";

class BaseStore extends EventEmitter {

  constructor(stores, data) {
    super();
    this._stores = stores;
    this._items  = [];

    if (data) {
      data.forEach(item => { this.add(item) });
    }
  }

  add(item) {
    this._items.push(new Model(item, this._stores));
  }

  getAll() {
    return this._items.slice();
  }

  getById(id) {
    return this._items.filter(item => item.id === id)[0];
  }

  delete(id) {
    this._items.splice(id, 1);
  }

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb)
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

}

export default BaseStore;
