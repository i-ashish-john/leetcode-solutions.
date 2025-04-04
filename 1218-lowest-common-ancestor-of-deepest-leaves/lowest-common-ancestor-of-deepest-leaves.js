/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function (root) {
    let maxDepth = -1;
    let lcaNode;
    const bfs = (root, depth = 0) => {
        let leftDepth = -1;
        let rightDepth = -1;

        if (root.left !== null) {
            leftDepth = bfs(root.left, depth + 1);
        }

        if (root.right !== null) {
            rightDepth = bfs(root.right, depth + 1);
        }


        if (leftDepth === rightDepth) {
            maxDepth = Math.max(maxDepth, depth);

            if (leftDepth === maxDepth||depth === maxDepth) {
                lcaNode = root;
            }
            if (leftDepth === -1) {
                return depth;
            } 
        }

        return Math.max(leftDepth, rightDepth);
    };
    bfs(root);
    return lcaNode;
};