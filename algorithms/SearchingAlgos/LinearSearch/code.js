// MY SOLUTION 

function linSearch(arr, val){
    let counter = 0 
    while(counter < arr.length){
      if(arr[counter] === val){
        return counter 
      }
      counter++ 
    }
    return -1 
  }
  
  console.log(linSearch([3,2,5,4,1], 2))




