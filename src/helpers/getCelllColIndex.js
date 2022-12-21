const getCellColIndex = (grid, cell) => {
    const row = grid[cell.rowIndex];
    return row.findIndex(c => c.rowIndex === cell.rowIndex && c.colIndex === cell.colIndex);
};

export default getCellColIndex;
