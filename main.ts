import {Stack} from "./Stack";

let stack = new Stack();

function reverseArray(arr: number[]): number[] {
    arr.forEach((item) => stack.push(item));
    for (let i = 0; i < arr.length; i++) {
        let temp: number | undefined = stack.pop()
        if (temp){
           arr[i] = temp;
        }
    }
    return arr;
}

console.log(reverseArray([1,2,4,5,8,3,1]));