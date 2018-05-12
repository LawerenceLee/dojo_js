heapify = arr => {
    if (arr.length <= 1) {return arr}
    
    let leastIndex;
    for (let x=0; x<arr.length; x++) {
       if (arr[x*2+1] > arr[x*2+2]) {leastIndex = x*2+2}
       else {leastIndex = x*2+1}

       if (arr[x] > arr[leastIndex]) {
           let temp = arr[x];
           arr[x] = arr[leastIndex];
           arr[leastIndex] = temp;
       }
    }
    return arr
}

// console.log(heapify([5, 4, 6, 9, 1, 3]))
console.log(heapify([5,2,3,4,1]))