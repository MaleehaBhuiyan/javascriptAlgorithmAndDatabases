/*
Write a function called sumZero which acepts a sorted array of integers. The function should find he first pair where the sum is zero. Return an array that includes both values at sum to zero or undefined if a pair does not exist. 
*/

// NAIVE SOLUTION 

function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = arr.length - 1; j > 1; j--){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
    return undefined 
}



console.log(sumZero([-3,-2,-1,0,1,2,3])) //=> [-3,3]
console.log(sumZero([-2,0,1,3])) //=> undefined
console.log(sumZero([1,2,3])) //=> undefined 

function sumZero1(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}


console.log(sumZero1([-3,-2,-1,0,1,2,3])) //=> [-3,3]
console.log(sumZero1([-2,0,1,3])) //=> undefined
console.log(sumZero1([1,2,3])) //=> undefined 
// time complexity O(n)
// space complexity O(1)