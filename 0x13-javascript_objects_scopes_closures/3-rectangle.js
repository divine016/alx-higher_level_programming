#!/usr/bin/node
// Creates a module called print() to print the squares 
 class Rectangle {
    constructor (w, h) {
      if (typeof w === 'number' && w > 0 && typeof h === 'number' && h > 0) {
        this.width = w;
        this.height = h;
      }
    }
  
    print () {
      for (let i = 0; i < this.height; i++) {
        let start = '';
        let y = 0;
        while (y < this.width) {
          start += 'X';
          y++;
        }
  
        console.log(start);
      }
    }
  }
  module.exports = Rectangle;