import {Stack} from "./Stack";

let stack: Stack = new Stack();

function reverseArray(arr: number[]): number[] {
    arr.forEach((item: number) => stack.push(item));
    for (let i = 0; i < arr.length; i++) {
        arr[i] = stack.pop();
    }
    return arr;
}

console.log(reverseArray([1,2,4,5,8,3,1]));