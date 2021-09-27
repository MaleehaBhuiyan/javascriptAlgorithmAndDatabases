function validAnagram(string1, string2){
    let frequencyCounter1 = {}, frequencyCounter2 = {};
    
    for(let val of string1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of string2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1 
    }

    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)) return false 
        if(frequencyCounter1[key] !== frequencyCounter2[key]) return false 
    }

    return true 
}

console.log(validAnagram('', '')) // true 
console.log(validAnagram('rat', 'car')) // false 
console.log(validAnagram('texttwisttime', 'texttwisttime')) // true 
