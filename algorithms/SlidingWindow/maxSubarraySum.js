/*
Problem: Write a function maxSubarraySUm hich accepts an array of integers and  number called n. The function should calculate the maximum sum of n consecutive elemnts in the array 

maxSubarraySum([1,2,5,2,8,1,5,2], 2) => 10 

*/

function maxSubarraySum(arr, num){
    let maxSum = 0 
    let tempSum = 0 
    if(arr.length < num) return null
    for(let i = 0; i < num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum 
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}