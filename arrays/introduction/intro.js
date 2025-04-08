//data structure array is an ordered collection of elements that can be accessed using numerical index
//custom array

class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    //add item to the array
    push(item){
        this.data[this.length]= item
        this.length++;
        return this.length;
    }

    //get an item from an aray
    get(index){
        return this.data[index];
    }

    //remove the las element from an array
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    //remove the first item from an array
    shift(){
        const firstItem = this.data[0]
        //re indexing
        for(let i=0;i<this.length; i++){
            this.data[i] = this.data[i+1]
        }
        //delete 
        delete this.data[this.length - 1];
        this.length--;
        return firstItem;

    }
}

const myNewArray = new MyArray();

myNewArray.push('mango');
myNewArray.push("apple");
myNewArray.push("banana");
myNewArray.push("orange");

console.log(myNewArray);