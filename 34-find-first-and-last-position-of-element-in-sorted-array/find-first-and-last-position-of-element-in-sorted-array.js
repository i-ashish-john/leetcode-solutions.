/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
return findFirstAndLast(nums,target)
};

function findFirstAndLast(nums, target) {
    let first = findFirst(nums, target);
    let last = findLast(nums, target);
    return [first,last];
}

function findFirst(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            if (mid === 0 || nums[mid - 1] !== target) {
                return mid;
            }
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function findLast(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            if (mid === nums.length - 1 || nums[mid + 1] !== target) {
                return mid;
            }
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

