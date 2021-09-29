function flatten(arr){
	if(arr.filter(Array.isArray).length === 0) return arr; 
	let flatArr = [].concat.apply([], arr); 
	return flatten(flatArr);
}
