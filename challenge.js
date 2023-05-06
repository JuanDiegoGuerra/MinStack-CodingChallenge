class Stack {
	constructor() {
		this.stack = [];
	}

  push(number) {
		// write your code here.

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
