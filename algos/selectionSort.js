selectionSort = arr => {
    let lowest = 0;
    for (let x=lowest+1; x<arr.length; x++) {
        if (arr[x] < lowest) {
            lowest = arr[x];
        }
        console.log(lowest)
    }
}

selectionSort([3,38,44,5,47,15,36,26,27,2,46,4,19,50,48])