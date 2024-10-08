export function mathFunction(x: number, a: number = 4.1, b: number = 2.7): number {
  return a * Math.cbrt(x) - (b * getBaseLog(5, x)) / Math.pow(getBaseLog(10, x - 1), 3);
}

const xStart: number = 1.5;
const xEnd: number = 3.5;
const xDelta: number = 0.4;
const xArray: number[] = [1.9, 2.15, 2.34, 2.74, 3.16];

function getBaseLog(x: number, y: number) {
  return Math.log(y) / Math.log(x);
}

type List = number[];

export function taskA(xBegin: number, xEnd: number, xDelta: number, a: number = 4.1, b: number = 2.7): List {
  let stack: List = [];
  for (let i: number = xBegin; i <= xEnd; i += xDelta) {
    stack.push(mathFunction(i, a, b));
  }
  return stack;
}

export function taskB(list: number[], a: number = 4.1, b: number = 2.7): List {
  let stack: List = [];
  for (let item of list) {
    stack.push(mathFunction(item, a, b));
  }
  return stack;
}

console.log(taskA(xStart, xEnd, xDelta));
console.log(taskB(xArray));

