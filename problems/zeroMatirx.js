function zeroMatrix(matrix) {
    if(!matrix || !matrix[0]) {
        new Error("Invalid matrix");
    }
    if (matrix.length < 1) {
        return matrix;
    }

    const m = matrix.length;
    const n = matrix[0].length;
    const zeroRows = new Array(m);
    const zeroCols = new Array(n);
    zeroRows.fill(false);
    zeroCols.fill(false);

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] === 0) {
                zeroRows[i] = true;
                zeroCols[j] = true;
            }
        }
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(zeroRows[i] || zeroCols[j]) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

const m = [
    [1, 0, 3],
    [4, 5, 0],
    [7, 8, 9]
]
console.log(zeroMatrix(m));
