/**
 * * 트리를 기반으로한 자료구조
 * * 힙 : 데이터에서 최대값과 최소값을 빠르게 찾기 위해 고안된 완전 이진 트리
 * * 완전 이진 트리 : 노드를 삽일할 때 최하단 왼쪽 노드부터 차례대로 삽입하는 트리
 * * 힙을 사용하는 이유 : 힙을 사용하면 최대값과 최솟값을 찾으면 O(logN)
 * * 우선순위 큐와 같이 최대값과 최솟값을 찾아야 하는 자료구조 및 알고리즘 구현 등에 활용됨
 * * 최대 힙, 최소 힙으로 구조를 분류할 수 있음
 * * 힙은 보통 배열로 많이 표현함
 * ? 이진 탐색 트리는 탐색을 위한 구조!
 * todo: 삽입 과정은 무조건 완전 이진 트리를 따른다. 이 후 비교한 다음 재배치 한다
 * todo: 맥스힙이라면 데이터 삭제 시 가장 큰 값을 삭제한다. (루트 삭제)->가장 마지막에 삽입된 노드를 위로 올림->자식 노드 중에 큰 값과 스왑
 */

/**
 * * 힙과 배열
 * * 인덱스로 접근함 (0은 빈 데이터를 넣고 1부터 시작하도록 셋팅)
 * @부모노드 자식노드/2
 * @왼쪽자식노드 부모노드*2
 * @오른쪽자식노드 부모노드*2+1
 */

class Heap {
  private heapArr: Array<any> = [];
  constructor(root: any) {
    this.heapArr.push(null);
    this.heapArr.push(root);
  }

  private swapCheck(insertIdx: number): boolean {
    if (insertIdx <= 1) return false;
    let parentIdx = Math.floor(insertIdx / 2);
    if (this.heapArr[insertIdx] > this.heapArr[parentIdx]) return true;
    else return false;
  }

  public desc() {
    console.log(this.heapArr);
  }

  public insert(value: any) {
    let parentIdx: number;
    let currentIdx: number;
    this.heapArr.push(value);
    currentIdx = this.heapArr.length - 1;
    while (this.swapCheck(currentIdx)) {
      parentIdx = Math.floor(currentIdx / 2);
      [this.heapArr[currentIdx], this.heapArr[parentIdx]] = [
        this.heapArr[parentIdx],
        this.heapArr[currentIdx],
      ];
      currentIdx = parentIdx;
    }
  }
}

const heap = new Heap(5);
heap.insert(3);
heap.insert(4);
heap.desc();
