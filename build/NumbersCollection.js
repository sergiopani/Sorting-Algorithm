"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    swap(leftIndex, rigthIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftHand] = this.data[rigthIndex];
        this.data[rigthIndex] = this.data[leftHand];
    }
    compare(leftIndex, rigthIndex) {
        return this.data[leftIndex] > this.data[rigthIndex];
    }
    get length() {
        return this.data.length;
    }
}
exports.NumbersCollection = NumbersCollection;
