const createMergeCell = (startCell, endCell) => {
    return {
        ...startCell,
        colSpan: (endCell.colIndex + endCell.colSpan - 1) - startCell.colIndex + 1,
        rowSpan: (endCell.rowIndex + endCell.rowSpan - 1) - startCell.rowIndex + 1,
    };
};

export default createMergeCell;
