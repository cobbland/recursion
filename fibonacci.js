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

function fibsRec(times, firstNum = 0, nextNum = 1) {
    if (times <= 0) {
        return [];
    }
    let fibReturn = [firstNum];
    return fibReturn.concat(
        fibsRec(times - 1, nextNum, firstNum + nextNum)
    );
}

console.log(fibsRec(100));