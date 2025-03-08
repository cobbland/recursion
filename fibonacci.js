function fibs(times) {
    if (times <= 0) return [];

    let fibsReturn = [];
    let [firstNum, nextNum] = [0, 1];
    
    for (let i = 0; i < times; i++) {
        fibsReturn.push(firstNum);
        [firstNum, nextNum] = [nextNum, firstNum + nextNum];
    }
    return fibsReturn;
}

function fibsRec(times, [firstNum, nextNum] = [0, 1]) {
    if (times <= 0) {
        return [];
    }
    let fibReturn = [firstNum];
    return fibReturn.concat(
        fibsRec(
        times - 1, 
        [firstNum, nextNum] = [nextNum, firstNum + nextNum]
        )
    );
    
}

console.log(fibs(7));
console.log(fibsRec(7)); // [0, 1, 1, 2, 3, 5, 8]