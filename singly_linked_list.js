class Node {
  constructor(val) {
    this.value = val;
    this.next = undefined;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = undefined;
    this.size = 0;
  }

  add = (val) => {
    const tmp = this.head;
    this.head = new Node(val);
    this.head.next = tmp;
    this.size++;
  }

  size = () => this.size;

  isEmpty = () => this.head === undefined;

  hasNode = (val) => {
    if (this.isEmpty()) return false;
    for (let current = this.head; current !== undefined; current = current.next) {
      if (current.value === val) return true;
    }
    return false;
  }

  delete = (val) => {
    if (this.isEmpty()) return;

    if (this.head.value === val) {
      let tmp = this.head;
      this.head = this.head.next;
      tmp = undefined; // avoid loitering
      this.size--;
      return;
    }
    
    for (let current = this.head, previous = undefined; current !== undefined; previous = current, current = current.next) {
      if (current.value === val) {
        previous.next = current.next;
        current = undefined; // avoid loitering
        this.size--;
        return;
      }
    }
  }

  get = (val) => {
    if (this.isEmpty()) return;
    for (let current = this.head, previous = undefined; current !== undefined && current.value === val; previous = current, current = current.next);
    return current;
  }

  print = () => {
    if (this.isEmpty()) console.log("list is empty");
    for (let current = this.head; current !== undefined; current = current.next) {
      console.log(current.value);
    }
  }
}

const link = new SinglyLinkedList();
const values = [1,2,3,4,5];
values.forEach(v => link.add(v));
link.print();
values.reverse().forEach(v => link.delete(v));
link.print();