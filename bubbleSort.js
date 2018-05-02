bubbleSort = arr => {
    let notSorted = true;
    while (notSorted) {
        notSorted = false;
        for (let x=1; x<arr.length; x++) {
            if (arr[x-1] > arr[x]) {
                notSorted = true;
                let temp = arr[x];
                arr[x] = arr[x-1];
                arr[x-1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3,38,44,5,47,15,36,26,27,2,46,4,19,50,48]))