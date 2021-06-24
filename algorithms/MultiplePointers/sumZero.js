// Write a funciton called sumZero hich accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes the sum to 0 or undefined if the pair does not exist.

// examples
// sumZero([-3,-2,-10,1,2,3]) -> [-3,3]
// sumZero([-2,0,1,3]) -> undefined 
// sumZero([1,2,3]) -> undefined

// NAIVE SOLUTION 

function sumZero(arr){
    for(let i = 0 ; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
}


// REFACTORED SOLUTION 

function sumZero(arr){
    let left = 0
    let right = arr.length - 1 
    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === 0){
            return [arr[left], arr[right]]
        } else if (sum > 0){
            right--
        } else {
            left++ 
        }
    }
}