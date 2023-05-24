class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function (root) {
  const queue = [];
  const visited = [];
  queue.push(root);
  let i = 0;
  while (queue.length) {
    if (queue[i].left) {
      queue.push(queue[i].left);
    }
    if (queue[i].right) {
      queue.push(queue[i].right);
    }
    i++;
  }
  return visited;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Reverse level order traversal: ${traverse(root)}`);
