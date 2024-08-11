https://www.youtube.com/watch?time_continue=147&v=zPnN046OM34&embeds_referring_euri=https%3A%2F%2Fleetcode.com%2F&source_ve_path=MTM5MTE3LDEzOTExNywyODY2Ng


/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    const GRID_WIDTH = grid[0].length;
    const GRID_HEIGHT = grid.length;

    let count = 0;

    for (let row = 0; row < GRID_HEIGHT - 2; row++) {
        for (let col = 0; col < GRID_WIDTH - 2; col++) {
            if (isMagicGrid(row, col)) {
                count++;
            }
        }
    }

    return count;

    // **********************************************
    function isMagicGrid(row, col) {
        const flatBorderIndices = [0, 1, 2, 5, 8, 7, 6, 3];
        const sequence = [2,9,4,3,8,1,6,7,2,9,4,3,8,1,6,7];
        const reversedSequence = [7,6,1,8,3,4,9,2,7,6,1,8,3,4,9,2];
        const topLeftNum = grid[row][col];
        const set = new Set();

        if (grid[row + 1][col + 1] !== 5) return false;
        
        // Corner numbers must be even
        if (grid[row][col] % 2 !== 0 ||
            grid[row][col + 2] % 2 !== 0 ||
            grid[row + 2][col + 2] % 2 !== 0 ||
            grid[row + 2][col] % 2 !== 0) return false;
        
        // No duplicates
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const num = grid[row + i][col + j];
                if (set.has(num)) return false;
                set.add(num);
            }
        }

        // Border functions must follow sequence (including the reverse of this squence)
        let seqStartIndex = 0;
        let revSeqStartIndex = 0

        while (sequence[seqStartIndex] !== topLeftNum || reversedSequence[revSeqStartIndex] !== topLeftNum) {
            if (sequence[seqStartIndex] !== topLeftNum) {
                seqStartIndex++;
            }
            if (reversedSequence[revSeqStartIndex] !== topLeftNum) {
                revSeqStartIndex++;
            }
        }

        for (let j = 0; j < flatBorderIndices.length; j++) {
            const flatIndex = flatBorderIndices[j];
            const num = grid[row + Math.floor(flatIndex / 3)][col + (flatIndex % 3)];

            if (num !== sequence[seqStartIndex + j] && 
                num !== reversedSequence[revSeqStartIndex + j]) return false;
        }
        
        return true;
    }
};