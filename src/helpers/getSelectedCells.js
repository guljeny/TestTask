import getCellByIndex from "./getCellByIndex";

const isCellsEqual = (cell1, cell2) => {
  return cell1.rowIndex === cell2.rowIndex && cell1.colIndex === cell2.colIndex;
};

const getEndAndStartCellsIndexes = (grid, {startCell, endCell}) => {
  let startCellRowIndex = startCell.rowIndex < endCell.rowIndex ? startCell.rowIndex : endCell.rowIndex;
  let startCellColIndex = startCell.colIndex < endCell.colIndex ? startCell.colIndex : endCell.colIndex;
  let endCellRowIndex = (startCell.rowIndex + startCell.rowSpan - 1) < (endCell.rowIndex + endCell.rowSpan - 1)
    ? (endCell.rowIndex + endCell.rowSpan - 1)
    : (startCell.rowIndex + startCell.rowSpan - 1);
  let endCellColIndex = (startCell.colIndex + startCell.colSpan - 1) < (endCell.colIndex + endCell.colSpan - 1) 
    ? (endCell.colIndex + endCell.colSpan - 1)
    : (startCell.colIndex + startCell.colSpan - 1);

  const cells = []
  grid.forEach(row => {
    row.forEach(cell => {
      const startRowIndex = cell.rowIndex;
      const endRowIndex = cell.rowIndex + cell.rowSpan - 1;
      const startColIndex = cell.colIndex;
      const endColIndex = cell.colIndex + cell.colSpan - 1;
      if(
        ((startRowIndex >= startCellRowIndex && startRowIndex <= endCellRowIndex) &&
        (startColIndex >= startCellColIndex && startColIndex <= endCellColIndex)) ||
        ((endRowIndex >= startCellRowIndex && endRowIndex <= endCellRowIndex) &&
        (endColIndex >= startCellColIndex && endColIndex <= endCellColIndex)) ||
        ((startRowIndex >= startCellRowIndex && startRowIndex <= endCellRowIndex) &&
        (endColIndex >= startCellColIndex && endColIndex <= endCellColIndex)) ||
        ((endRowIndex >= startCellRowIndex && endRowIndex <= endCellRowIndex) &&
        (startColIndex >= startCellColIndex && startColIndex <= endCellColIndex))
      ) {
        cells.push(cell);
      }
    });
  });
  let limits = {
    startCellRowIndex,
    startCellColIndex,
    endCellRowIndex,
    endCellColIndex,
  }; 

  cells.forEach(cell => {
    limits.startCellRowIndex = cell.rowIndex <= limits.startCellRowIndex ? cell.rowIndex : limits.startCellRowIndex;
    limits.startCellColIndex = cell.colIndex <= limits.startCellColIndex ? cell.colIndex : limits.startCellColIndex;
    limits.endCellRowIndex = (cell.rowIndex + cell.rowSpan - 1) >= limits.endCellRowIndex ? (cell.rowIndex + cell.rowSpan - 1) : limits.endCellRowIndex;
    limits.endCellColIndex = (cell.colIndex + cell.colSpan - 1) >= limits.endCellColIndex ? (cell.colIndex + cell.colSpan - 1) : limits.endCellColIndex;
  })

  const newStartCell = getCellByIndex(grid, { rowIndex: limits.startCellRowIndex, colIndex: limits.startCellColIndex });
  const newEndCell = getCellByIndex(grid, { rowIndex: limits.endCellRowIndex, colIndex: limits.endCellColIndex });

  if(
    startCell.rowIndex === newStartCell.rowIndex && 
    startCell.colIndex === newStartCell.colIndex && 
    endCell.rowIndex === newEndCell.rowIndex &&
    endCell.colIndex === newEndCell.colIndex
  ) {
    return limits;
  } else {
    return getEndAndStartCellsIndexes(grid, {startCell: newStartCell, endCell: newEndCell});
  }
};

const getSelectedCells = (grid, { startCell, endCell }) => {
  const cells = [startCell];
  const { 
    startCellRowIndex, 
    endCellRowIndex, 
    startCellColIndex, 
    endCellColIndex 
  } = getEndAndStartCellsIndexes(grid, { startCell, endCell });

  for (let rowIndex = startCellRowIndex; rowIndex <= endCellRowIndex; rowIndex++) {
    for (let colIndex = startCellColIndex; colIndex <= endCellColIndex; colIndex++) {
      const cell = getCellByIndex(grid, { rowIndex, colIndex });
      if (cell && !isCellsEqual(cell, startCell)) {
        cells.push(cell);
      }
    }
  }

  return {
    cells,
    leftTopCell: getCellByIndex(grid, { rowIndex: startCellRowIndex, colIndex: startCellColIndex }),
    rightBottomCell: getCellByIndex(grid, { rowIndex: endCellRowIndex, colIndex: endCellColIndex }),
  };
};

export default getSelectedCells;
