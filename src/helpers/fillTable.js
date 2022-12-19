export default ({width, height}) => {
    const table = [];

    for(let i = 0; i < height; i++) {
        const row = [];
        for(let j = 0; j < width; j++) {
            row.push(`row: ${i} col: ${j}`);
        }
        table.push(row);
    }
    
    return table;
};
