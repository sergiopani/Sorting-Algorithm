export class NumbersCollection {    

    constructor(public data: number[]){}


    swap(leftIndex:number, rigthIndex: number):void{
        const leftHand = this.data[leftIndex];
        this.data[leftHand] = this.data[rigthIndex];
        this.data[rigthIndex] = this.data[leftHand];
    }

    compare(leftIndex:number, rigthIndex:number): boolean{        
        return this.data[leftIndex] > this.data[rigthIndex];
    }

    get length(): number{
        return this.data.length
    }

}