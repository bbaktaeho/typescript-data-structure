/**
 * * BST : 이진 트리에 추가적인 조건이 있는 트리
 * * 데이터 검색에 사용
 * * 탐색 속도를 개선할 수 있음
 * todo: 노드 삭제 시 (1. leaf 노드 삭제, 2. 자식 노드가 하나인 노드 삭제, 3. 자식 노드가 두 개인 노드 삭제)
 * todo: 1. 쉬움
 * todo: 2. 쉬움
 * todo: 3. 삭제할 노드의 오른 쪽 자식 중 가장 작은 값을 위로 올린다. 만약 가장 작은 값의 노드가 오른쪽 자식이 있다면 이전 레벨의 노드의 왼쪽 자식으로 이어준다
 */

class BSTNode {
  public value;
  public left: BSTNode;
  public right: BSTNode;
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  private head: BSTNode;
  constructor(head) {
    this.head = head;
  }

  public insert(value) {
    let current = this.head;
    while (true) {
      if (value < current.value) {
        if (current.left) current = current.left;
        else {
          current.left = new BSTNode(value);
          break;
        }
      } else {
        if (current.right) current = current.right;
        else {
          current.right = new BSTNode(value);
          break;
        }
      }
    }
  }

  public search(value): boolean {
    let current = this.head;
    while (current) {
      if (current.value == value) return true;
      else if (current.value > value) current = current.left;
      else current = current.right;
    }
    return false;
  }

  public remove(value) {
    let current = this.head;
    let parent: BSTNode = this.head;
    while (current) {
      if (current.value == value) {
        // 1. 삭제할 노드가 자식이 없는 경우
        if (!current.left && !current.right) current = null;
        // 2. 삭제할 노드가 자식이 하나인 경우
        else if (current.left && !current.right) current = current.left;
        else if (!current.left && current.right) current = current.right;
        // 3. 삭제할 노드가 자식이 많은 경우
      } else if (current.value > value) {
        parent = current;
        current = current.left;
      } else {
        parent = current;
        current = current.right;
      }
    }
    return false;
  }
}

const root = new BSTNode(1);
const tree = new BST(root);
tree.insert(2);
tree.insert(0);
tree.insert(3);
console.log(tree.search(4));
