//A class can be sorted if includes all this propities
interface Sortable{
    swap(leftIndex: number, rigthIndex: number):void,
    compare(leftIndex: number, rigthIndex: number):boolean,
    get length():number

}

export class Sorter {
    //Take a collection of data and sort all elements
    
    constructor(public collection: Sortable){}

    sort(): void{
        //Implementation of buble sort
        //This is the same as this.collection.length
        const { length }  = this.collection;
        
        //All of this works if it is an array of numbers
        for(let i = 0; i< length; i++){
            for(let j = 0; j < length - i - 1; j++){                
                if(this.collection.compare(j,j+1)){                    
                    this.collection.swap(j,j+1);
                }                
            }
        }

        //This is going to work if this is a string

    }
}
