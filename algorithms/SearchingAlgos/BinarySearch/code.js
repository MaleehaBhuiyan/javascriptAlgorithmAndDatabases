function binarySearch(arr, elem){
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2)
    while(arr[mid] !== elem && start < end){
      if(arr[mid] < elem){
        start = mid + 1 
      } else if (arr[mid] > elem){
        end = mid - 1 
      }
      mid = Math.floor((start + end) / 2)
    }
    if(arr[mid] === elem) return mid 
    else return - 1
  }