function areThereDuplicates() {
    let arr = Object.values(arguments), frequencyCounter = {};

    for(let val of arr){
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
    }

    for(let key in frequencyCounter){
        if(frequencyCounter[key] > 1) return true  
    }

    return false  
}

console.log(areThereDuplicates(1,2,3))

