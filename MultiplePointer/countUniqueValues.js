function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    let count = 1;
    let first = 0;
    let second = 1;
    
    while(second < arr.length){
        if(arr[first] !== arr[second]){
            count++;
        }
        first++, second++;
    }
    return count;
}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0 
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4
