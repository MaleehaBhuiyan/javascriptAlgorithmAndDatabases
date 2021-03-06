function bubbleSort(arr){
    for(let i = arr.length - 1; i >= 0; i--){
      for(let j = 0; j <= i-1; j++){
        if(arr[j] > arr[j+1]){
          var temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = temp 
        }
      }
    }
    return arr 
  }


// OPTIMIZED SOLUTION FOR A NEARLY SORTED ARRAY 

function bubbleSort(arr){
    var noSwaps;
    for(let i = arr.length - 1; i >= 0; i--){
      noSwaps = true; 
      for(let j = 0; j <= i-1; j++){
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp 
          noSwaps = false 
        }
      }
        if(noSwaps) break 
    }
  
    return arr 
  }
  