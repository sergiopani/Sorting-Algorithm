class Sorter {
    //Take a collection of data and sort all elements
    
    constructor(public collection: number [] | string){}

    sort(): void{
        //Implementation of buble sort
        //This is the same as this.collection.length
        const { length }  = this.collection;
        
        //All of this works if it is an array of numbers
        for(let i = 0; i< length; i++){
            for(let j = 0; j < length - i - 1; j++){
                //if type is an array we can acces to all the propieties associated with an array
                if(this.collection instanceof Array){
                    if(this.collection[j] > this.collection[j+1]){                    
                        //We need to do the swap
                        const leftHand = this.collection [j];
                        this.collection[j] = this.collection[j+1];
                        this.collection[j+1] = this.collection[leftHand];
                    }
                }

                //If we are working with a string
                if(typeof this.collection === 'string'){
                    //We've got acces to all propieties associed with string
                }

            }
        }

        //This is going to work if this is a string

    }
}

const sorter = new Sorter([2,4,6,8,3,4]);
console.log(sorter.collection)
sorter.sort()
console.log(sorter.collection)