"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        //Reference to the first node
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    at(index) {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds!');
    }
    compare(leftIndex, rigthIndex) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        return this.at(leftIndex).data > this.at(rigthIndex).data;
    }
    swap(leftIndex, rigthIndex) {
        const leftNode = this.at(leftIndex);
        const rigthNode = this.at(rigthIndex);
        const leftHand = leftNode.data;
        leftNode.data = rigthNode.data;
        rigthNode.data = leftHand;
    }
    print() {
        if (!this.head) {
            console.log("This list is empty");
        }
        let node = this.head;
        while (node) {
            console.log("This node data is: " + node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
