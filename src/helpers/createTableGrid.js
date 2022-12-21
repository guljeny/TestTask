const createTableGrid = ({width, height, startRowIndex = 0, startColIndex = 0}) => {
    const table = [];

    for(let rowIndex = startRowIndex; rowIndex < height; rowIndex++) {
        const row = [];
        for(let colIndex = startColIndex; colIndex < width; colIndex++) {
            row.push({
                rowIndex,
                colIndex,
                colSpan: 1,
                rowSpan: 1,
            });
        }
        table.push(row);
    }
    
    return table;
};

export default createTableGrid;
