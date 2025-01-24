/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return isBST(root, -Infinity, Infinity);
};

function isBST(node, min, max) {
    // Base case: empty tree is a valid BST
    if (node === null) {
        return true;
    }

    // Check the current node's value is within the valid range
    if (node.val <= min || node.val >= max) {
        return false;
    }

    // Recursively check left and right subtrees
    return isBST(node.left, min, node.val) && isBST(node.right, node.val, max);
}
