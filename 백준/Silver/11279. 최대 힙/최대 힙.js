class Heap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChild(index) {
    return index * 2 + 1;
  }

  getRightChild(index) {
    return index * 2 + 2;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    let parent = this.getParent(index);

    while (this.heap[parent] && this.heap[parent] < this.heap[index]) {
      this.swap(index, parent);
      index = parent;
      parent = this.getParent(index);
    }
  }

  bubbleDown(index) {
    let left = this.getLeftChild(index);
    let right = this.getRightChild(index);

    let max = index;

    if (this.heap[left] && this.heap[left] > this.heap[max]) {
      max = left;
    }

    if (this.heap[right] && this.heap[right] > this.heap[max]) {
      max = right;
    }

    if (max === index) return;

    this.swap(max, index);
    this.bubbleDown(max);
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (!this.size()) return 0;
    if (this.size() === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return min;
  }
}

const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : 'index.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const answer = [];
const N = +input[0];
const heap = new Heap();
for (let i = 1; i <= N; i++) {
  const num = +input[i];
  if (num === 0) {
    answer.push(heap.pop());
  } else {
    heap.push(+input[i]);
  }
}

console.log(answer.join('\n'));