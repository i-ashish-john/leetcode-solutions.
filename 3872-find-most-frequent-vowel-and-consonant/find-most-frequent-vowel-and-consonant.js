/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let c = new Map();
    let v = new Map();
    let vowels = ['a','e','i','o','u'];

    for (let i = 0; i < s.length; i++) {
        let val_ = s[i];
        if (vowels.includes(val_)) {
            v.set(val_, (v.get(val_) || 0) + 1);
        } else {
            c.set(val_, (c.get(val_) || 0) + 1);
        }
    }

    return MapCalculate(v, c);
};

function MapCalculate(vowels, consonants) {
    let maxVowel = 0, maxCons = 0;

    if (vowels.size > 0) {
        maxVowel = Math.max(...vowels.values());
    }
    if (consonants.size > 0) {
        maxCons = Math.max(...consonants.values());
    }

    return maxVowel + maxCons;
}
