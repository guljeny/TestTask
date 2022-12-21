const filterGrid = (grid, cells) => 
    grid.map(row => 
        row.filter(c => 
            !cells.some(({rowIndex, colIndex}) => c.rowIndex === rowIndex && c.colIndex === colIndex)
    )
);

export default filterGrid;
