/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    let count = 1

    let limit = 0
    let left = 0
    while (left < s.length) {
        const px = widths[s[left]?.charCodeAt() - 97]
        if (limit + px <= 100) {
            limit += px
        } else {
            count++
            limit = px
        }

        left++
    }
    return [count, limit]
};