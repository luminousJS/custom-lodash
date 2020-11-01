const toLower = str => str.toLowerCase();

const toUpper = str => str.toUpperCase();

const lowerFirst = str => toLower(str[0]) + str.slice(1);

const upperFirst = str => toUpper(str[0]) + str.slice(1);

const capitalize = str => toUpper(str[0]) + toLower(str.slice(1));

const endsWith = (str, lett, num) => str.endsWith(lett, num);

const startsWith = (str, lett, num) => str.startsWith(lett, num);

const repeat = (str, num) => str.repeat(num);