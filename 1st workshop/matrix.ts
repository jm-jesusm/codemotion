/**
 * Gives the sum of the differences between the largest and smallest numbers in each row of a matrix
 * @param matrix
 * @returns the sum
 */

function checksum(matrix: number[][]) {
    let sum = 0;

    for (const row of matrix) {
        const max = Math.max(...row);
        const min = Math.min(...row);
        sum += max - min;
    }

    return sum;
}
