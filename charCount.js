// Write a function which takes in a string nd returns the count of each string. 

// "hello" => {h: 1, e: 1, l: 2, o: 1}

function charCount(str){
    var result = {}

    for(var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase()
        // if the char is a number/letter AND is a key in the object, add count to 1 
        if(result[char] > 0){
            result[char]++
        } else{
            result[char] = 1 
        } 
    }
    return result 
}