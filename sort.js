const arr = [2,0,2,1,1,0]

const partition = (arr,left,right)=>{
  let pivot = arr[left];


  while(left<right){
    while(left<right&&pivot<=arr[right]){
      right--;
    }
    arr[left] = arr[right];
    while(left<right&&arr[left]<=pivot){
      left++;
    }
    arr[right] = arr[left]
  }
  arr[left] = pivot;
  return left;
}


const quickSort = (arr,left,right)=>{
  if(left<right){
    let mid = partition(arr,left,right);
    quickSort(arr,left,mid-1);
    quickSort(arr,mid+1,right)
  }else{
    return;
  }
}
quickSort(arr,0,arr.length-1)

console.log(arr)