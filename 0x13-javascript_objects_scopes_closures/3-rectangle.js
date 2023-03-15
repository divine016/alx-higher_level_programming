#!/usr/bin/node
/**
 * prints a rectangle using X
 */
class Rectangle {
    constructor(w, h) {
      this.height = h;
      this.width = w;
    }
    print(){
        for(let i = 0; i< this.height; i++){
            let start = "";
            let y = 0;
            if(y < this.width){
                start += "X";
                y++
            }

            console.log(start);
        }
    }
}
module.exports = Rectangle;