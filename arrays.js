let array1 = [1, 2, 3, 0, 4, '', 5, 6, true, undefined, 'dfdf', false, null, ' ', NaN];
let array2 = [2, 3, false, true, 'dfgdfgdf', ''];

const compact = arr => arr.filter(item => item);

const head = arr => arr[0];

const initial = arr => arr.splice(0, arr.length - 1);

const tail = arr => arr.splice(1, arr.length - 1);

const uniq = arr => [...new Set([...arr])];

const last = arr => arr[arr.length - 1];

const join = (arr, sep) => arr.join(sep);

const reverse = arr => arr.reverse();

const concat = (...arrays) => arrays.reduce((acc, curr) => acc.concat(curr));

const fill = (arr, val, start, end) => arr.fill(val, start, end);

const nth = (arr, num) => num >= 0 ? arr[num] : arr[arr.length + num];

const lastIndexOf = (arr, val) => arr.lastIndexOf(val);

const slice = (arr, start, end) => arr.slice(start, end);

const zipped = (...arrays) => arrays;

const drop = (arr, quantity = 1) => arr.splice(quantity, arr.length);

const dropRight = (arr, quantity = 1) => arr.splice(0, arr.length - quantity);

const intersection = (...arrays) => arrays.reduce((acc, curr) => acc.filter(item => curr.includes(item)));

const difference = (arr1, arr2) => arr1.filter(item => !arr2.includes(item));

const pull = (arr, ...values) => difference(arr, values);

const pullAll = (arr, values) => pull(arr, ...values);

const remove = (arr, func) => difference(arr, arr.filter(func));

const take = (arr, quantity) => arr.splice(0, quantity);

const without = (arr, ...values) => arr.filter(item => !values.includes(item));

const union = (...arrays) => [...new Set([].concat(...arrays))];

const chunk = (arr, length) => [...new Array(Math.ceil(arr.length / length))].map(item => arr.splice(0, length));

const flatten = arr => arr.reduce((acc, curr) => Array.isArray(curr) ? [...acc, ...curr] : [...acc, curr], []);

const fromPairs = arr => arr.reduce((acc, curr) => ({ ...acc, [curr[0]]: curr[1] }), {});

const sortedIndex = (arr, num) => !~arr.findIndex(el => el >= num) ? arr.length : arr.findIndex(el => el >= num);

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