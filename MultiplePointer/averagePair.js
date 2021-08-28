function averagePair(arr, target){
    let pointerOne = 0;
    let pointerTwo = arr.length - 1;
    while(pointerOne < pointerTwo){
        let average = (arr[pointerOne] + arr[pointerTwo]) / 2 
        if(average === target){
            return true 
        } if(average < target){
            pointerOne++;
        } else {
            pointerTwo--;
        }
    }
    return false; 
}

console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))