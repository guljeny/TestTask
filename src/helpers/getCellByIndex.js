const getCellByIndex = (grid, { colIndex, rowIndex }) => {
    let cell = null;
    rows: for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++) {
            const limits = {
                left: grid[i][j].rowIndex,
                right: grid[i][j].rowIndex + grid[i][j].rowSpan - 1,
                top: grid[i][j].colIndex,
                bottom: grid[i][j].colIndex + grid[i][j].colSpan - 1,
            }
            if( 
                rowIndex >= limits.left && rowIndex <= limits.right &&
                colIndex >= limits.top && colIndex <= limits.bottom
            ) {
                cell = grid[i][j]
                break rows;
            }
        }
    }
    return cell;
};

export default getCellByIndex;
