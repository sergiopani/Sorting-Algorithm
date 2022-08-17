//A class can be sorted if includes all this propities
interface Sortable{
    swap(leftIndex: number, rigthIndex: number):void,
    compare(leftIndex: number, rigthIndex: number):boolean,
    get length():number

}

export abstract class Sorter {
    //Take a collection of data and sort all elements
    abstract compare(leftIndex:number,rigthIndex:number):boolean;

    abstract swap(leftIndex:number, rigthIndex:number):void;

    abstract length: number;

    
    sort(): void{
        //Implementation of buble sort
        //This is the same as this.collection.length
        const { length }  = this;
        
        //All of this works if it is an array of numbers
        for(let i = 0; i< length; i++){
            for(let j = 0; j < length - i - 1; j++){                
                if(this.compare(j,j+1)){                    
                    this.swap(j,j+1);
                }                
            }
        }

        //This is going to work if this is a string

    }


}
