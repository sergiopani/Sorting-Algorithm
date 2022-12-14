"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rigthIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rigthIndex].toLowerCase();
    }
    swap(leftIndex, rigthIndex) {
        //Take the string separated in array of numbers
        const characters = this.data.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rigthIndex];
        characters[rigthIndex] = leftHand;
        this.data = characters.join();
    }
}
exports.CharactersCollection = CharactersCollection;
