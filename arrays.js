let array1 = [1, 2, 3, 0, 4, '', 5, 6, true, undefined, 'dfdf', false, null, ' ', NaN];
let array2 = [2, 3, false, true, 'dfgdfgdf', ''];

const compact = arr => arr.filter(item => item);

const head = arr => arr[0];

const initial = arr => arr.splice(0, arr.length - 1);

const last = arr => arr[arr.length - 1];

const join = (arr, sep) => arr.join(sep);

const reverse = arr => arr.reverse();

const concat = (...arrays) => arrays.reduce((acc, curr) => acc.concat(curr));

const fill = (arr, val, start, end) => arr.fill(val, start, end);

const nth = (arr, num) => num >= 0 ? arr[num] : arr[arr.length + num];

const lastIndexOf = (arr, val) => arr.lastIndexOf(val);

const difference = (arr1, arr2) => {
    let newArr = [];

    for (item of arr1) {
        if (!~arr2.findIndex(elem => elem === item)) newArr.push(item);
    }

    return newArr;
}

const chunk = (arr, length) => {
    let newArr = [];

    while (arr.length) {
        newArr.push(arr.splice(0, length));
    }

    return newArr;
}

const drop = (arr, quantity) => {
    arr.splice(0, quantity);
    return arr;
}

const pull = (arr, ...values) => {
    return arr.filter(item => {
        for (elem of values) {
            if (elem === item) return false;
        }
        return true;
    })
}

const remove = (arr, func) => {
    return difference(arr, arr.filter(func));
}

const take = (arr, quantity) => {
    return arr.splice(0, quantity);
}

const union = (...arrays) => {
    let resArray = [];

    for (elem of [].concat(...arrays)) {
        if (!resArray.includes(elem)) resArray.push(elem);
    }

    return resArray;
}

const flatten = arr => {
    let newArr = [];

    for (elem of arr) {
        Array.isArray(elem) ? newArr.push(...elem) : newArr.push(elem);
    }

    return newArr;
}

const without = (arr, ...values) => {
    return arr.filter(item => !values.includes(item));
}

const fromPairs = arr => {
    let obj = {};

    arr.forEach(item => { obj[item[0]] = item[1] });

    return obj;
}

/*const flattenDeep = arr => {
    let newArr = [];

    for (elem of arr) {
        Array.isArray(elem) ? newArr.push(...elem) : newArr.push(elem);
    }

    if (newArr.some(item => Array.isArray(item))) {
        return flattenDeep(newArr)
    } else {
        return newArr;
    };
}*/

/*const xor = (...arrays) => {
    let resArray = [];

    for (elem of [].concat(...arrays)) {
        if (!resArray.includes(elem)) resArray.push(elem);
    }

    return resArray;
}*/