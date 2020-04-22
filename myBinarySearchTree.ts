import * as fs from "fs";
/**
 * * BST : 이진 트리에 추가적인 조건이 있는 트리
 * * 데이터 검색에 사용
 * * 장점 : 탐색 속도를 개선할 수 있음
 * ! 단점 :
 * todo: 노드 삭제 시 (1. leaf 노드 삭제, 2. 자식 노드가 하나인 노드 삭제, 3. 자식 노드가 두 개인 노드 삭제)
 * todo: 1. 쉬움
 * todo: 2. 쉬움
 * todo: 3. 삭제할 노드의 오른 쪽 자식 중 가장 작은 값을 위로 올린다. 만약 가장 작은 값의 노드가 오른쪽 자식이 있다면 이전 레벨의 노드의 왼쪽 자식으로 이어준다
 * * 일반적인 경우 : O(logN)
 * * 최악의 경우 : O(N)
 */

class BSTNode {
  public value: any;
  public left: BSTNode;
  public right: BSTNode;
  constructor(value: any) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  private root: BSTNode;
  constructor(root) {
    this.root = root;
  }

  public desc() {
    fs.writeFileSync(
      "./output/myBinarySearchTree.json",
      JSON.stringify(this.root)
    );
  }
  public insert(value) {
    let current = this.root;
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
    let current = this.root;
    while (current) {
      if (current.value == value) return true;
      else if (current.value > value) current = current.left;
      else current = current.right;
    }
    return false;
  }

  public remove(value): any {
    let current: BSTNode = this.root;
    let parent: BSTNode = this.root;
    let changeParent: BSTNode;
    let change: BSTNode;
    while (current) {
      if (current.value == value) {
        // 1. 삭제할 노드가 자식이 없는 경우
        if (!current.left && !current.right) {
          if (this.root.value == current.value) this.root = null;
          else if (parent.value > value) parent.left = null;
          else parent.right = null;
          current = undefined;
        }
        // 2. 삭제할 노드가 자식이 한쪽만 있는 경우
        // 2-1. 왼쪽 자식만 있는 경우
        else if (current.left && !current.right) {
          if (this.root.value == current.value) this.root = this.root.left;
          else if (parent.value > value) parent.left = current.left;
          else parent.right = current.left;
          current = undefined;
        }
        // 2-2. 오른쪽 자식만 있는 경우
        else if (!current.left && current.right) {
          if (this.root.value == current.value) this.root = this.root.right;
          else if (parent.value > value) parent.left = current.right;
          else parent.right = current.right;
          current = undefined;
        }
        // 3. 삭제할 노드가 자식 노드를 두 개 가지고 있는 경우
        else {
          if (this.root.value == current.value) {
            changeParent = current.right;
            change = current.right;
            while (change.left) {
              changeParent = change;
              change = change.left;
            }
            changeParent.left = null;
            if (change.right) changeParent.left = change.right;
            change.left = current.left;
            change.right = current.right;
            this.root = change;
            current = undefined;
          } else if (parent.value > value) {
            changeParent = current.right;
            change = current.right;
            while (change.left) {
              changeParent = change;
              change = change.left;
            }
            changeParent.left = null;
            if (change.right) changeParent.left = change.right;
            change.left = current.left;
            change.right = current.right;
            parent.left = change;
            current = undefined;
          } else {
            changeParent = current.right;
            change = current.right;
            while (change.left) {
              changeParent = change;
              change = change.left;
            }
            changeParent.left = null;
            if (change.right) changeParent.left = change.right;
            change.left = current.left;
            change.right = current.right;
            parent.right = change;
            current = undefined;
          }
        }
      } else if (current.value > value) {
        parent = current;
        current = current.left;
      } else {
        parent = current;
        current = current.right;
      }
    }
  }
}

function myRandom(min, max) {
  var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return ranNum;
}

const root = new BSTNode(15);
const tree = new BST(root);
for (let i = 0; i < 20; i++) tree.insert(myRandom(0, 100));

// tree.insert(17);
// tree.insert(6);
// tree.insert(8);
// tree.insert(16);
// tree.insert(22);
// tree.insert(5);
// tree.insert(9);
// tree.insert(14);
// tree.insert(20);
// tree.insert(29);
// tree.insert(27);
tree.desc();
if (tree.search(26)) {
  tree.remove(26);
  // tree.desc(); // 26이 없는 트리가 출력
} else console.log(`26은 없음`);
