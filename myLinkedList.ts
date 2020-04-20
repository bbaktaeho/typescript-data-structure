/**
 * * Linked list
 * * 배열의 단점을 극복한 리스트
 * * 노드 : 데이터 저장 단위
 * * 포인터 : 각 노드 안에서 다음, 이전 노드와의 연결 정보를 가지고 있는 공간
 * ! 접근속도가 느림 (검색)
 * ! 저장공간 효율이 높지 않음
 * ! 중간 데이터 삭제시, 앞 뒤 데이터의 연결을 재구성해야 하는 부가적 작업 필요
 * TODO : 리스트에 노드 추가 (가장 뒤)
 * TODO : 리스트의 노드를 삭제 (head, 마지막노드, 중간노드)
 * TODO : 원하는 위치에 노드를 추가
 * TODO : 리스트 검색
 * TODO : 리스트를 출력
 * ? 더블 링크드 리스트(이중 연결 리스트)
 */

class ListNode {
  public readonly value: any;
  public next: ListNode;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  public head: ListNode;
  public length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }

  public desc(): void {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }

  public add(value): void {
    let node = new ListNode(value);
    let current;
    if (this.head == null) {
      this.head = node;
      this.length++;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.length++;
    }
  }

  public removeValue(value): void {
    let node = this.head;
    if (node == null) console.error("head is not exists");
    else {
      if (node.value == value) {
        // 헤드가 지워질 때
        this.head = node.next;
        this.length--;
      } else {
        while (node.next) {
          if (node.next.value == value) {
            node.next = node.next.next;
            this.length--;
            break;
          }
          node = node.next;
        }
      }
    }
  }

  public removeIndex(index): void {
    let node = this.head;
    let count = 1;
    if (index == 0) {
      this.head = node.next;
      this.length--;
    } else if (index >= this.length) console.log("node is not exists");
    else {
      while (count < index) {
        node = node.next;
        count++;
      }
      node.next = node.next.next;
      this.length--;
    }
  }

  public search(value): { success: boolean; node?: ListNode } {
    let node = this.head;
    if (node.value == value) return { success: true, node };
    else {
      while (node.next) {
        if (node.next.value == value) return { success: true, node: node.next };
        node = node.next;
      }
      return { success: false };
    }
  }
}

const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);
list.add(60);
list.removeIndex(5);

// list.removeValue(60);
// list.removeValue(30);
console.log(`length : ${list.length}`);
console.log(`head : ${list.head.value}`);
console.log(`search : ${JSON.stringify(list.search(50))}`);

list.desc();
