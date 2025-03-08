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



console.log(fibs(10));