let sum = 0;

function maTranCheo(matran) {
    if (matran.length != matran[0].length) {
        console.log(false);
    } else {
        for (let i = 0; i < matran.length; i++) {
            for (let j = 0; j < matran.length; j++) {
                if (i != j && matran[i][j] != 0) {
                    sum += 1;
                }
            }
        }
    }
    if (sum == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

maTranCheo([
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 3],
]);
