import { useEffect, useState } from "react";

import './styles.css';


export const App = () => {
  const grid = [['First cell']];

  return (
    <div>
      <div className='controls'>
        <button data-merge-button>Merge</button>
        <button data-separate-button>Separate</button>
      </div>
      <table>
        <tbody>
          {grid.map((gridRow, rowIndex) => (
            <tr key={rowIndex}>
              {gridRow.map((gridCell, colIndex) => (
                <td
                  data-selected={false}
                  data-row-index={rowIndex}
                  data-col-index={colIndex}
                  key={colIndex}
                  colSpan={1}
                  rowSpan={1}
                >
                  {gridCell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
