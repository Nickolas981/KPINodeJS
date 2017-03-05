"use strick"

class Node {
  constructor(data, prev, next) {
    this.data = data || "Empty Node";
    this.prev = prev || null;
    this.next = next || null;
  }
}

class LinkedList {
  constructor(data) {
    this.length  = data ? 1:0;
    this.first = data ? new Node(data):null;
    this.last = data ? this.first:null;
  }

  append(data) {
    if (this.length === 0)
      this.first = this.last = new Node(data);
    else {
      this.last.next = new Node(data, this.last);
      this.last = this.last.next;
    }
    this. length++;
  }

  pop() {
    let tmp = this.last
    if (this.length <= 1)
      this.first = this.last = null;
    else {
      this.last = this.last.prev
      this.last.next = null;
    }
    this.length--;
    return tmp.data;
  }

  shift(data) {
    if this.length == 0
      this.first = this.last = new Node(data);
    else {
      this.first.prev = new Node(data, null, this.first);
      this.first = this.first.prev;
   }
    this.length++;
  }

  unshift() {
    let tmp = this.first;
    if (length <= 1)
      this.first = this.last = null;
    else {
      this.first = this.first.next;
      this.first.prev = null;
    }
    this.length--;
    return tmp.data;
  }
    
}
