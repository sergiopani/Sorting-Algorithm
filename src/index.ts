import { Sorter } from "./Sorter";
import { NumbersCollection} from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

/* 
const charactersCollection = new CharactersCollection('Xaayb');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data) */

const linkedList = new LinkedList();
linkedList.add(900);
linkedList.add(-500);
linkedList.add(200);
linkedList.add(4);

linkedList.sort()

linkedList.print()
