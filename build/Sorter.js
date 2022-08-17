"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    //Take a collection of data and sort all elements
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        //Implementation of buble sort
        //This is the same as this.collection.length
        const { length } = this.collection;
        //All of this works if it is an array of numbers
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
        //This is going to work if this is a string
    }
}
exports.Sorter = Sorter;
