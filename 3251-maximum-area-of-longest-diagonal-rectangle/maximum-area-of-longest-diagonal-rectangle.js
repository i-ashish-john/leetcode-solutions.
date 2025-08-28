/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let bestDiagonal = -Infinity;
    let bestArea = 0;

    for (let i = 0; i < dimensions.length; i++) {
        let length = dimensions[i][0];
        let width  = dimensions[i][1];

        let diagonal = Math.sqrt((length ** 2) + (width ** 2));
        let area = length * width;

 if (diagonal > bestDiagonal || (diagonal === bestDiagonal && area > bestArea)) {
            bestDiagonal = diagonal;
            bestArea = area;
    }
 }

    return bestArea;
};

