const Cell = ({ rowIndex, colIndex, colSpan = 1, rowSpan = 1, selectedCells }) => {
    const selected = !!selectedCells.find(c => c.colIndex === colIndex && c.rowIndex === rowIndex);
    
    return (
        <td
            data-selected={selected}
            data-row-index={rowIndex}
            data-col-index={colIndex}
            colSpan={colSpan}
            rowSpan={rowSpan}
        >
            row: {rowIndex} col: {colIndex}
        </td>
    );
};

export default Cell;
