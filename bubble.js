function bubbleSort(arr) {
    // loop with I from end of array towards beginning
    for(let i=arr.length; i >= 0; i--){
        for(let j=0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;