//write a function that takes an array and a chunk size as input. the function should return a new array //
// where the original array is split into chunks of the specified size.

//chunk([1,2,3,4,5,6,7,8] ,3)  [[1,2,3],[4,5,6],[7,8]]
//chunkArray([1,2,3,4,5],2)   output [[1,2],[3,4]]


//the algorithm ; create an empty array to store the chunks
//set a starting index to keeep track of where we are in the original array
//loop through the original array as long as the index has not reached the end
//extract a chunk of the specified size from the original array
//add the chunk to the new array
//increment the index by the chunk size
//return the new array


const chunk = (array, size) => {
    const chunked =[]
    let index = 0

    while(index< array.length){
        const chunk = array.slice(index,index+size)
        chunked.push(chunk)
        index += size
    }

    return chunked
}

console.log(chunk([1,2,3,45,6,7,8,9],4))
