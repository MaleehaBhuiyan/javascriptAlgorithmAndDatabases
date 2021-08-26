/*
Write a function called same, which accepts 2 arrays. The function should return true if every value in the array has it's corresponding values squares in the second array. The frequencies of values must be the same. 

same([1,2,3], [4,1,9]) // true 
same([1,2,3], [1,9]) // false 
same([1,2,1], [4,4,1]) // false 
*/


// NAIVE SOLUTION 
function same1(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        let squaredNum = arr2.indexOf(arr1[i] * arr1[i]) // not best possible solution because nested loop, (for and indexOf) ... O(n^2)
        if(squaredNum === -1) return false 
        arr2.splice(squaredNum, 1)
    }
    
    return true 
}


// console.log(same1([1,2,3], [4,1,9]))// true 
// console.log(same1([1,2,3], [1,9])) // false 
// console.log(same1([1,2,1], [4,4,1])) // false

// FREQUENCY COUNTER APPROACH

function same2(arr1, arr2){
    if(arr1.length !== arr2.length) return false 
    let frequencyCounter1 = {}, frequencyCounter2 = {};
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1 
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1 
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)) return false 
        if(frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false 
    }
    return true 
}

// this solution is O(n)

console.log(same2([1,2,3], [4,1,9]))// true 
console.log(same2([1,2,3], [1,9])) // false 
console.log(same2([1,2,1], [4,4,1])) // false

