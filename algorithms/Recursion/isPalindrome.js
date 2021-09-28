function isPalindrome(str){
    
    function helper(str){
        if(str.length === 0) return str;
        return helper(str.slice(1)) + str[0]; 
    }
    
    let reverseStr = helper(str); 
    
    if(reverseStr === str) return true; 
    return false; 
    
}