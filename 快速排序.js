function partition(arr,left,right){
  let pivot = arr[left]
  while(left<right){
    while(left<right&&arr[right]>=pivot){
      right--;
    }
    arr[left] = arr[right];
    while(left<right&&arr[left]<=pivot){
      left++
    }
    arr[right] = arr[left];
  }
  arr[left] =pivot;
  return left;
}

function quickSort(arr,left,right){
  if(left<right){
    let mid = partition(arr,left,right);
    quickSort(arr,left,mid-1);
    quickSort(arr,mid+1,right)
  }else{
    return;
  }
}
const arr = [5,8,4,9,3,2,6,4]

quickSort(arr,0,arr.length-1);
console.log(arr)