function minSubArrayLen(arr, num){
    let tempSum = 0; 
    let tempArr = []; 
    let minArr = []; 

    let counter = 0; 
    while(tempSum < num){
        if(arr[counter] === undefined){
            return 0; 
        }
        tempArr.push(arr[counter]);
        tempSum+=arr[counter];
        counter++;
    }

    

     
}




console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 
// console.log('-----------------------')
// console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 
// console.log('-----------------------')
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1
// console.log('-----------------------')
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)) // 3
// console.log('-----------------------')
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)) // 5
// console.log('-----------------------')
// console.log(minSubArrayLen([4,3,3,8,1,2,3], 11)) // 2
// console.log('-----------------------')
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)) // 0

