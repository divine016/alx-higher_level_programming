#!/usr/bin/node
// return an empty object id w or h is negative or 0
 
 class Rectangle {
    constructor (w, h) {
      if (typeof w === 'number' && w > 0 && typeof h === 'number' && h > 0) {
        this.width = w;
        this.height = h;
      }
    }
  }
  module.exports = Rectangle;