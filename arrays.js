let array1 = [1, 2, 3, 0, 4, '', 5, 6, true, undefined, 'dfdf', false, null, ' '];
let array2 = [2, 3, false, true, 'dfgdfgdf', ''];

const compact = arr => arr.filter(item => item);

const head = arr => arr[0];

const initial = arr => arr.splice(0, arr.length - 1);

const last = arr => arr[arr.length - 1];

const join = (arr, sep) => arr.join(sep);

const difference = (arr1, arr2) => {
    let newArr = [];

    for (let item of arr1) {
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
        for (elem in values) {
            if (values[elem] === item) return false;
        }
        return true;
    })
}

const remove = (arr, func) => {
    return difference(arr, arr.filter(func));
}