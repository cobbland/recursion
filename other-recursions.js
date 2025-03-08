function sumRange(number) {
    return number === 1 ? number : number + sumRange(number -1);
}

function power(base, exp) {
    if (exp === 0) {
        return 1;
    } else {
        return base * power(base, exp - 1)
    }
}

function factorial(number) {
    if (number === 1) {
        return number;
    } else {
        return number * factorial(number - 1);
    }
}

function all(arr, func) {
    const copy = arr.slice();
    if (copy.length === 0) {
        return true;
    } else if (func(copy[copy.length - 1])) {
        copy.pop();
        return all(copy, func);
    } else {
        return false;
    }
}

function productOfArray(arr) {
    const copy = arr.slice();
    if (copy.length === 0) {
        return 1;
    } else {
        return copy.pop() * productOfArray(copy);
    }
}

function contains(obj, value) {
    for (let key in obj) {
        if (obj[key] === value) {
            return true;
        } else if (
            typeof obj[key] === 'object' &&
            obj[key] !== null
        ) {
            return contains(obj[key], value);
        } 
    }
    return false;
}

function totalInt(arr) {
    let count = 0;
    if (arr.length === 0) {
        return 0;
    }
    for (let thing in arr) {
        if (Array.isArray(arr[thing])) {
            count += totalInt(arr[thing])
        } else if (Number.isInteger(arr[thing])) {
            count += 1;
        }
    }
    return count;
}

function SumSquares(arr) {
    let sum = 0;
    //base case
    if (arr.length === 0) {
        return 0;
    }
    //recursive case
    let first = arr.shift();
    if (Array.isArray(first)) {
        sum += SumSquares(first);
    } else if (Number.isInteger(first)) {
        sum += first * first;
    }
    return sum + SumSquares(arr);
}

function replicate(times, number) {
    if (times <= 0) {
        return [];
    } else {
        let newArr = [number];
        // newArr.push(replicate(times - 1, number));
        return newArr.concat(replicate(times - 1, number));
    }
}