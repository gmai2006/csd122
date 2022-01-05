class Node {
  constructor(val) {
    this.value = val;
    this.next = undefined;
  }
}

class CircularList {
  constructor() {
    this.head = undefined;
    this.size = 0;
  }

  addAtBeginning = (val) => {
    if (this.head === undefined) {
      this.head = new Node(val);
      this.head.next = this.head;
      this.size++;
      return;
    }

    let current = undefined;
    for (current = this.head; current.next !== this.head; current = current.next);

    const tmp = this.head;
    this.head = new Node(val);
    this.head.next = tmp;
    current.next = this.head;
    this.size++;
  }

  size = () => this.size;

  isEmpty = () => this.head === undefined;

  hasNode = (val) => {
    if (this.isEmpty()) return false;
    if (this.head === this.head.next) {
      return (this.head.value === val);
    }

    let current = undefined;
    for (current = this.head; current.next !== this.head; current = current.next) {
      if (current.value === val) return true;
    }
    return current.value === val;
  }

  delete = (val) => {
    if (this.isEmpty()) return;
    let current, previous = undefined;
    for (current = this.head; current.next !== this.head && current.value !== val; previous = current, current = current.next);
    
    if (current.value !== val) return;

    if (previous !== undefined) {
      previous.next = current.next;
    } else {
      if (this.size === 1) {
        this.head = undefined;
      } else {
        let last = undefined;
        for (last = this.head; last.next !== this.head; last = last.next);
        this.head = current.next;
        last.next = this.head;
      }
    }
    current = undefined; // avoid loitering
    this.size--;
    
  }

  get = (val) => {
    if (this.isEmpty()) return;
    let current = undefined;
    for (current = this.head; current.next !== this.head && current.value !== val; current = current.next);
    return current.value === val ? current : undefined;
  }

  print = () => {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }
    let current = undefined;
    for (current = this.head; current.next !== this.head; current = current.next) {
      console.log(current.value);
    }
    console.log(current.value);
  }
}

const link = new CircularList();
const values = [1,2,3,4,5];
values.forEach(v => link.addAtBeginning(v));
// values.forEach(v => console.log(link.hasNode(v)));
// link.print();
// console.log(link.get(6));
// values.forEach(v => console.log(link.get(v).value));
values.reverse().forEach(v => link.delete(v));
link.print();