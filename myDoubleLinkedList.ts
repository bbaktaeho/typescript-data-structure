class DoubleListNode {
  public prev: DoubleListNode;
  public readonly value: any;
  public next: DoubleListNode;
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class DoubleLinkedList {
  public head: DoubleListNode;
  public length: number;
  public tail: DoubleListNode;
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = this.head;
  }

  public desc() {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }

  public insert(value) {
    if (this.head == null) {
      this.head = new DoubleListNode(value);
      this.tail = this.head;
      this.length++;
    } else {
      let node = this.head;
      while (node.next) node = node.next;
      node.next = new DoubleListNode(value);
      node.next.prev = node;
      this.tail = node.next;
      this.length++;
    }
  }

  public searchValueFromHead(
    value
  ): { success: boolean; node?: DoubleListNode } {
    let node = this.head;
    while (node) {
      if (node.value == value) return { success: true, node };
      node = node.next;
    }
    return { success: false };
  }

  public searchValueFromTail(
    value
  ): { success: boolean; node?: DoubleListNode } {
    if (this.head == null) return { success: false };
    let node = this.tail;
    while (node) {
      if (node.value == value) return { success: true, node };
      node = node.prev;
    }
    return { success: false };
  }

  /**
   * 특정 값 앞에 노드 추가하기
   * @param insertValue 추가할 노드의 값
   * @param value 특정 값
   */
  public prevInsert(insertValue, value) {
    let node: DoubleListNode;
    let newNode: DoubleListNode;
    if (this.head == null) {
      this.head = new DoubleListNode(insertValue);
      this.length++;
    } else {
      node = this.tail;
      while (node.value != value) {
        node = node.prev;
        if (!node) return console.log("node is not exists");
      }
      if (node == this.head) {
        newNode = new DoubleListNode(insertValue);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
      } else {
        newNode = new DoubleListNode(insertValue);
        node.prev.next = newNode;
        newNode.prev = node.prev;
        newNode.next = node;
        node.prev = newNode;
        this.length++;
      }
    }
  }

  /**
   * 특정 값 뒤에 노드 추가하기
   * @param insertValue 추가할 노드의 값
   * @param value 특정 값
   */
  public nextInsert(insertValue, value) {
    let node: DoubleListNode;
    let newNode: DoubleListNode;
    if (this.head == null) {
      this.head = new DoubleListNode(insertValue);
      this.length++;
    } else {
      node = this.head;
      while (node.value != value) {
        node = node.next;
        if (!node) return console.log("node is not exists");
      }
      if (node == this.tail) {
        newNode = new DoubleListNode(insertValue);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
      } else {
        newNode = new DoubleListNode(insertValue);
        node.next.prev = newNode;
        newNode.next = node.next;
        newNode.prev = node;
        node.next = newNode;
        this.length++;
      }
    }
  }
}

const doubleList = new DoubleLinkedList();
doubleList.insert(10);
doubleList.insert(20);
doubleList.insert(30);
doubleList.insert(40);
doubleList.insert(50);
doubleList.insert(60);
doubleList.insert(70);
doubleList.insert(80);
doubleList.insert(90);
doubleList.prevInsert(5, 10);
doubleList.prevInsert(33, 40);
doubleList.nextInsert(77, 70);
doubleList.prevInsert(72, 77);
doubleList.nextInsert(94, 90);
console.log(`head: ${doubleList.head.value}`);
console.log(`tail: ${doubleList.tail.value}`);
console.log(`length: ${doubleList.length}`);

const result1 = doubleList.searchValueFromHead(5);
const result2 = doubleList.searchValueFromTail(94);

doubleList.desc();
