"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = require("./Utilities");
const todo = {
    description: "create app",
    status: "open",
    assignee: "markus",
    data: {
        created: new Date()
    }
};
function print(element) {
    console.log(element);
}
print(todo);
// Test array und functions
const someNumbers = [2, 7, 8, 6, 4, 21];
let filter = (0, Utilities_1.filterItems)(someNumbers, 10);
let items = (0, Utilities_1.multiplyTwo)(someNumbers);
console.log(filter, items);
