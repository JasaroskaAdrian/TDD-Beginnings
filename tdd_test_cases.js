const lod = require("lodash")

function formatCurrency(value, currency = 'USD') {
    //https://www.freecodecamp.org/news/how-to-format-number-as-currency-in-javascript-one-line-of-code/
    const transformedCurrency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    });
    return transformedCurrency.format(value);
}
console.log(formatCurrency(1500)); // $1,500.00


function transformArrayToObject(arr, obj) {
    obj = {...arr}
    return obj
}
console.log(transformArrayToObject([1,2]))


function capitalizeFirstLetter(input, firstLetter, remainingword, capitalizer) {
    firstLetter = input.charAt(0)
    capitalizer = firstLetter.toUpperCase()
    remainingword = input.slice(1)
    return capitalizer + remainingword
}
console.log(capitalizeFirstLetter("i love Stuff"))


function convertToCamelCase(input, converter) {
    //https://www.geeksforgeeks.org/how-to-convert-string-to-camel-case-in-javascript/
    converter = _.camelCase(input)
    return converter
}
console.log(convertToCamelCase("This Is My Variable"))