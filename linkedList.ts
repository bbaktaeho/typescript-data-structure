// /**
//  * * 배열의 단점을 해결하기 위한 자료 구조
//  * * 배열은 미리 예약을 해두고 데이터를 읽고 쓰지만 연결리스트는 필요할 때마다 공간을 쓸 수 있음
//  * @노드 : 데이터 저장 단위[데이터, 포인터]
//  * @포인터 : 각 노드 안에서 다음이나 이전의 노드와 연결 정보를 가지고 있는 공간
//  * @head : 시작점
//  * @tail : 마지막점
//  * @length : 리스트의 길이
//  * ! 접근 속도가 느림
//  * ! 중간 데이터 삭제나 삽입 시 번거로움
//  */

// class N {
//   // 노드
//   public data: any;
//   public next: any;
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   // 연결리스트
//   public length: number;
//   public head: N;
//   public tail: N;
//   constructor() {
//     this.length = 0;
//     this.head = null;
//     this.tail = null;
//   }

//   /**
//    * print
//    */
//   public print() {
//     let node = this.head;
//     while (node) {
//       console.log(node.data);
//       node = node.next;
//     }
//   }

//   /**
//    * add
//    */
//   public add(data) {
//     const node = new N(data);
//     let cuurent = this.head;
//     if (!cuurent) {
//       this.head = node;
//       this.length++;
//       this.tail = node;
//       return node;
//     } else while (cuurent.next) cuurent = cuurent.next;
//     cuurent.next = node;
//     this.length++;
//     this.tail = node;
//     return node;
//   }

//   /**
//    * remove
//    * @position index
//    */
//   public remove(position) {
//     let cuurent = this.head;
//     let count = 0;
//     if (position == 0) {
//       this.head = this.head.next;
//       this.length--;
//     } else if (position < this.length) {
//       while (++count < position) cuurent = cuurent.next;
//       if (this.tail == cuurent.next) {
//         this.tail = cuurent;
//       }
//       cuurent.next = cuurent.next.next; // 마지막이라고 해도 null 이 들어감
//       this.length--;
//     } else {
//       console.log("삭제 불가");
//     }
//   }
// }

// const linkedList = new LinkedList();
// linkedList.add(10);
// linkedList.add(2);
// linkedList.add(30);
// linkedList.add(40);
// linkedList.add(220);
// linkedList.add(123);

// console.log(JSON.stringify(linkedList.tail) + "   " + linkedList.length);
// linkedList.remove(5);
// console.log(JSON.stringify(linkedList.tail) + "   " + linkedList.length);

// linkedList.print();
