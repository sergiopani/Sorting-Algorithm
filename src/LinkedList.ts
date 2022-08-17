import { Sorter } from './Sorter'

class Node{
    next: Node | null = null;
    constructor(public data: number){}

}

export class LinkedList extends Sorter{
    head: Node| null = null;

    add(data: number): void{
        const node = new Node(data);

        if(!this.head){
            this.head = node;
            return;
        }

        //Reference to the first node
        let tail = this.head;
        while(tail.next){
            tail = tail.next;
        }

        tail.next = node;

    }

    get length():number{
        if(!this.head){
            return 0;
        }

        let length = 1;
        let node = this.head;
        while(node.next){
            length++;
            node = node.next;
        }

        return length;        
    }

    at(index: number):Node{
        if(!this.head){
            throw new Error('Index out of bounds');
        }

        let counter = 0;
        let node: Node | null = this.head;

        while(node){
            if(counter === index){
                return node;
            }
            counter++;

            node = node.next;
        }

        throw new Error('Index out of bounds!')

    }

    compare(leftIndex: number, rigthIndex: number){
        
        if(!this.head){
            throw new Error('List is empty')
        }

        return this.at(leftIndex).data > this.at(rigthIndex).data;
    }

    swap(leftIndex:number, rigthIndex:number):void{

        const leftNode = this.at(leftIndex);
        const rigthNode = this.at(rigthIndex); 

        const leftHand = leftNode.data;
        leftNode.data = rigthNode.data;
        rigthNode.data = leftHand;

    }

    print():void{
        if(!this.head){
            console.log("This list is empty")
        }

        let node: Node | null = this.head;

        while(node){
            console.log("This node data is: " + node.data)
            node = node.next;
        }
    }
}