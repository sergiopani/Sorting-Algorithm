import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter{


    constructor(public data: string){
        super();
    }

    get length(): number{
        return this.data.length
    }

    compare(leftIndex: number, rigthIndex: number): boolean {
        return this.data[leftIndex].toLowerCase() > this.data[rigthIndex].toLowerCase();
    }

    swap(leftIndex: number, rigthIndex: number):void{
        //Take the string separated in array of numbers
        const characters = this.data.split('');

        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rigthIndex]
        characters[rigthIndex] = leftHand;

        this.data = characters.join();
    }

}