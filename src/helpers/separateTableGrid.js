const getIsertColIndex = (row, startCellColIndex) => {
    let insertColIndex = 0;
    if(startCellColIndex !== 0) {
        row.forEach(cell => {
            if(insertColIndex < startCellColIndex) {
                insertColIndex = insertColIndex + cell.colSpan;
            }
        });
    }
    return insertColIndex;
};

const separateTableGrid = (grid, separatedCellsGrid, startCell, selectedCells) => {
    let separatedCellsGridRowCount = 0;

    return grid.map((row, index) => {
        if(index >= startCell.rowIndex && separatedCellsGridRowCount < separatedCellsGrid.length) {
          const colInsertIndex = getIsertColIndex(row, startCell.colIndex);
          const cellsToInsert = separatedCellsGrid[separatedCellsGridRowCount];
          const cellsToReplace = selectedCells.filter(c => c.rowIndex === index);
          
          row.splice(colInsertIndex, cellsToReplace.length, ...cellsToInsert);
          separatedCellsGridRowCount++;
        }
        return row;
    });
};

export default separateTableGrid;
