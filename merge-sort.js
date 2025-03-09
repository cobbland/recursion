function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    const arrLeft = mergeSort(arr.slice(0, arr.length / 2));
    const arrRight = mergeSort(arr.slice(arr.length / 2));
    const sortedArr = [];
    let indexLeft = 0;
    let indexRight = 0;
    while (
        indexLeft < arrLeft.length &&
        indexRight < arrRight.length
    ) {
        if (arrLeft[indexLeft] <= arrRight[indexRight]) {
            sortedArr.push(arrLeft[indexLeft]);
            indexLeft++;
        } else {
            sortedArr.push(arrRight[indexRight]);
            indexRight++;
        }
    }
    while (indexLeft < arrLeft.length) {
        sortedArr.push(arrLeft[indexLeft]);
        indexLeft++;
    }
    while (indexRight < arrRight.length) {
        sortedArr.push(arrRight[indexRight]);
        indexRight++;
    }
    return sortedArr;
}
