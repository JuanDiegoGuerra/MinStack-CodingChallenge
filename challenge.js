class Stack {
	constructor() {
		this.stack = [];
	}

  push(number) {
		// write your code here.
		if (this.stack.length > 0) {
			const n = this.stack.length;
			this.stack.push([
				number,
				Math.min(number, this.stack[n - 1][1]),
				Math.max(number, this.stack[n - 1][2]),
			]);
		} else {
			this.stack.push([number, number, number]);
		}
	}

	pop() {
		// write your code here.
	}
  
	min() {
		// write your code here.
	}
}

const stack = new Stack()
stack.push(3)
stack.push(5)
console.log(stack.min())
// => 3

stack.pop()
stack.push(7)
console.log(stack.min())
// => 3

stack.push(2)
console.log(stack.min())
// => 2

stack.pop()
console.log(stack.min())
// => 3

module.exports = Stack
