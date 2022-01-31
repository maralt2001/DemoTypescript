import {Todo} from "./Todo";
import {DataExtensionDate} from "./DataExtensionDate";
import {multiplyTwo, filterItems} from "./Utilities";


const todo: Todo<DataExtensionDate> = {
    description: "create app",
    status: "open",
    assignee: "markus",
    data: {
        created: new Date()
    }
}

function print (element:Todo<DataExtensionDate>) : void {
    console.log(element);
}

print(todo);

// Test array und functions
const someNumbers = [2, 7, 8, 6, 4, 21]
let filter = filterItems(someNumbers, 10);
let items = multiplyTwo(someNumbers)
console.log(filter, items);


