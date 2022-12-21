import { useEffect, useRef, useState } from 'react';

import Cell from './components/Cell';
import getTableSizeFromURL from "./helpers/getTableSizeFromURL";
import createTableGrid from './helpers/createTableGrid';
import getSelectedCells from './helpers/getSelectedCells';
import getCellByIndex from './helpers/getCellByIndex';
import filterGrid from './helpers/filterGrid';
import getCellColIndex from './helpers/getCelllColIndex';
import createMergeCell from './helpers/createMergeCell';
import separateTableGrid from './helpers/separateTableGrid';

import './styles.css';

const tableSize = getTableSizeFromURL();
const initialTable = createTableGrid(tableSize);

export const App = () => {
  const tableRef = useRef(null);
  const [grid, setGrid] = useState(initialTable);
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedCells, setSelectedCells] = useState([]);
  const [startSelectedCell, setStartSelectedCell] = useState(null);
  const [endSelectedCell, setEndSelectedCell] = useState(null);

  useEffect(() => {
    const tableReference = tableRef.current;
    const mouseMoveHandler = (e) => {
      const startCell = selectedCells[0];
      const colIndex = Number(e.target.dataset.colIndex);
      const rowIndex = Number(e.target.dataset.rowIndex);
      const endCell = getCellByIndex(grid, { colIndex, rowIndex });
      const { cells, leftTopCell, rightBottomCell } = getSelectedCells(grid, { startCell, endCell });
      
      setSelectedCells(cells);
      setStartSelectedCell(leftTopCell);
      setEndSelectedCell(rightBottomCell);
    };

    isSelecting 
      ? tableReference.addEventListener('mousemove', mouseMoveHandler)
      : tableReference.removeEventListener('mousemove', mouseMoveHandler);

    return () => tableReference.removeEventListener('mousemove', mouseMoveHandler);
  }, [grid, isSelecting, selectedCells]);

  const mouseDownHandler = (e) => {
    const colIndex = Number(e.target.dataset.colIndex);
    const rowIndex = Number(e.target.dataset.rowIndex);
    const cell = getCellByIndex(grid, { colIndex, rowIndex });
    
    setIsSelecting(true);
    setSelectedCells([ cell ]);
  };

  const clickMergeButtonHandler = () => {
    if (selectedCells.length < 2) return;
    
    const mergedGrid = filterGrid(grid, selectedCells)
    const startSelectedCellColIndex =  getCellColIndex(grid, startSelectedCell);
    const resultCell = createMergeCell(startSelectedCell, endSelectedCell);
    
    mergedGrid[startSelectedCell.rowIndex].splice(startSelectedCellColIndex, 0, resultCell);
    setGrid(mergedGrid);
    setSelectedCells([resultCell]);
  };

  const clickSeparateButtonHandler = () => {
    const separatedCellsGrid = createTableGrid({
      startRowIndex: startSelectedCell.rowIndex,
      startColIndex: startSelectedCell.colIndex,
      width: (endSelectedCell.colIndex + endSelectedCell.colSpan),
      height: (endSelectedCell.rowIndex + endSelectedCell.rowSpan),
    });
    const separatedGrid = separateTableGrid(grid, separatedCellsGrid, startSelectedCell, selectedCells);
    const separatedCells = separatedCellsGrid.reduce((acc, row) => [...acc, ...row],[]);

    setSelectedCells(separatedCells);
    setGrid(separatedGrid);
  };

  return (
    <div>
      <div className='controls'>
        <button data-merge-button onClick={clickMergeButtonHandler}>
          Merge
        </button>
        <button data-separate-button onClick={clickSeparateButtonHandler}>
          Separate
        </button>
      </div>
      <table
        onMouseDown={mouseDownHandler}
        onMouseUp={() => setIsSelecting(false)}
        ref={tableRef}
      >
        <tbody>
          {grid.map((gridRow, rowIndex) => (
            <tr key={rowIndex}>
              {gridRow.map((gridCell) => (
                <Cell
                  {...gridCell}
                  selectedCells={selectedCells}
                  key={gridCell.colIndex}/>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
