// 二叉排序树
// 功能：
//    排序
//    找最小值
//    找最大值

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let node = new Node(data, null, null);

    if (!this.root) {
      this.root = node;
      return;
    }

    let cNode = this.root;
    let pNode = null;

    while (true) {
      pNode = cNode;

      if (node.data < cNode.data) {
        cNode = cNode.left;

        if (!cNode) {
          pNode.left = node;
          break;
        }
      } else if (node.data > cNode.data) {
        cNode = cNode.right;

        if (!cNode) {
          pNode.right = node;
          break;
        }
      } else {
        break;
      }
    }
  }
}

const tree = new BSTree();
[44, 22, 66, 77, 33, 99, 55].forEach((v) => {
  tree.insert(v);
});

console.log(JSON.stringify(tree));
// out:
//
// {
//   "root": {
//       "data": 44,
//       "left": {
//           "data": 22,
//           "left": null,
//           "right": {
//               "data": 33,
//               "left": null,
//               "right": null
//           }
//       },
//       "right": {
//           "data": 66,
//           "left": {
//               "data": 55,
//               "left": null,
//               "right": null
//           },
//           "right": {
//               "data": 77,
//               "left": null,
//               "right": {
//                   "data": 99,
//                   "left": null,
//                   "right": null
//               }
//           }
//       }
//   }
// }
