/**
 * @param {character[]} chars
 * @return {number}
 */
function compress(chars) {
    if (chars.length <= 1) return chars.length;

    let writeIdx = 0;
    let count = 1;

    for (let i = 1; i <= chars.length; i++) {
        if (i < chars.length && chars[i] === chars[i - 1]) {
            count++;
        } else {
            chars[writeIdx++] = chars[i - 1];
            if (count > 1) {
                count.toString().split('').forEach(c => {
                    chars[writeIdx++] = c;
                });
            }
            count = 1;
        }
    }

    return writeIdx;
}