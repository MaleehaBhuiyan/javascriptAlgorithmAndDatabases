/*
Problem: Write a function called minSubarrayLen which accepts two parameters - an array of positive integers and a positive integer.
The function should return a minimum length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead. 
*/

/*
STEPS: 
1) 
*/

function minSubarrayLen(arr, num){
    if(arr.reduce((a,b) => a+ b, 0) < num){
        return 0 
    }
    let subArr = []
    let tempSum = 0 
    let maxSum = 0 
    for(let i = 0; i < arr.length; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum 
    for(let i = num; i < arr.length; i++){
        
    }

}