"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
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
