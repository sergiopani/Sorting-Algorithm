"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([2, 4, 6, 8, 3, 4]);
const sorter = new Sorter_1.Sorter(numbersCollection);
console.log(sorter.collection);
sorter.sort();
console.log(sorter.collection);
