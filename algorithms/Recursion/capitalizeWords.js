function capitalizeWords(arr){
	let capArr = []; 

	function helper(arr){
		if(arr.length === 0) return capArr; 
		capArr.push(arr[0].toUpperCase()); 
		return helper(arr.slice(1)); 
	}

	return helper(arr); 
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']