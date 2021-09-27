function sameFrequency(num1, num2){
    num1 = num1.toString();
    num2 = num2.toString();
    let frequencyCounter1 = {}, frequencyCounter2 = {};

    for(let val of num1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1 
    }
    for(let val of num2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1 
    }

    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)) return false 
        if(frequencyCounter1[key] !== frequencyCounter2[key]) return false 
    }

    return true 
}

  console.log(sameFrequency(182, 281))