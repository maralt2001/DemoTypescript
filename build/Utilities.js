"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterItems = exports.multiplyTwo = void 0;
function multiplyTwo(array) {
    return (array.map(item => item * 2));
}
exports.multiplyTwo = multiplyTwo;
function filterItems(array, lessThen) {
    return (array.filter(item => item < lessThen));
}
exports.filterItems = filterItems;
