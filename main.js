"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var stack = new Stack_1.Stack();
function reverseArray(arr) {
    arr.forEach(function (item) { return stack.push(item); });
    for (var i = 0; i < arr.length; i++) {
        arr[i] = stack.pop();
    }
    return arr;
}
console.log(reverseArray([1, 2, 4, 5, 8, 3, 1]));
