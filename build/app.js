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
function Print(element) {
    console.log(element);
}
Print(todo);
// Test array und functions
const someNumbers = [2, 7, 8, 6, 4, 21];
let filter = (Utilities_1.filterItems)(someNumbers, 10);
let items = (Utilities_1.multiplyTwo)(someNumbers);
console.log(filter, items);
