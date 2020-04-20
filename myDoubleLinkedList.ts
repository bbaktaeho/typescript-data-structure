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

  public searchValueFromHead(value): { success: boolean; node?: any } {
    let node = this.head;
    while (node) {
      if (node.value == value) return { success: true, node };
      node = node.next;
    }
    return { success: false };
  }

  public searchValueFromTail(value): { success: boolean; node?: any } {
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
    let node = this.head;
    if (node == null) {
      this.head = new DoubleListNode(insertValue);
      this.length++;
    } else {
      node = this.tail;
      while (node.value != value) {
        node = node.prev;
        if (!node) return console.log("node is not exists");
      }
      let newNode = new DoubleListNode(insertValue);
      node.prev.next = newNode;
      newNode.prev = node.prev;
      newNode.next = node;
      node.prev = newNode;
      this.length++;
    }
  }

  /**
   * 특정 값 뒤에 노드 추가하기
   * @param insertValue 추가할 노드의 값
   * @param value 특정 값
   */
  public nextInsert(insertValue, value) {}
}

const doubleList = new DoubleLinkedList();
doubleList.insert(10);
doubleList.insert(20);
doubleList.insert(30);
doubleList.insert(40);
doubleList.insert(50);
doubleList.prevInsert(35, 40);
console.log(`head: ${doubleList.head.value}`);
console.log(`tail: ${doubleList.tail.value}`);

const result1 = doubleList.searchValueFromHead(30);
const result2 = doubleList.searchValueFromTail(40);
console.log(`30의 이전 값 : ${result1.node.prev.value}`);
console.log(`40의 다음 값 : ${result2.node.next.value}`);

doubleList.desc();
