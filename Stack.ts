export class Stack {
    container: number[] = [];
    constructor() {
    }
    push(num: number) {
        this.container.push(num);
    }
    pop(): number | undefined {
        return this.container.pop();
    }
    size(): number {
        return this.container.length;
    }
}