import { Sorter } from "./Sorter";
import { NumbersCollection} from "./NumbersCollection";

const numbersCollection = new NumbersCollection([2,4,6,8,3,4])
const sorter = new Sorter(numbersCollection);
console.log(sorter.collection)
sorter.sort()
console.log(sorter.collection)