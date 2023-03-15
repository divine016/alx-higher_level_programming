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
            let y = 0;
            let start = "";
            if(y< this.width){
                start += "X";
                y+_
            }
            console.log(start);
        }
    }
    rotate(){
        this.height = w;
        this.width = h
    }
    double(){
        this.height *= 2;
        this.width *= 2;  
    }
}
module.exports = Rectangle;