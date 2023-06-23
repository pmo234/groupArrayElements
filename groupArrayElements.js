function groupArrayElements(array,N){

    if(!Number.isInteger(N)||N<1){
        return 'N should be a positive integer'
    }
   
    const arrayLength = array.length
    var finalArray = []
    //Loop below slices the array into subarrays of size N then pushed into the final array. Any remainder is then pushed onto the array too.
    for(let i = 0;i<arrayLength;i+=N){
        const subArray = array.slice(i, i + N);
        finalArray.push(subArray);
    }
    return finalArray
}

console.log(groupArrayElements([1,2,3,4,5,6,7,8,9,10],2))
console.log(groupArrayElements([1,2,3,4,5,6,7,8,9,10],3))
console.log(groupArrayElements([1,2,3,4,5,6,7,8,9,10],11))

module.exports = {groupArrayElements}