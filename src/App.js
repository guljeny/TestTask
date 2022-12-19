import './styles.css';

import getTableSizeFromURL from "./helpers/getTableSizeFromURL";
import fillTable from './helpers/fillTable';

const tableSize = getTableSizeFromURL();

export const App = () => {
  const grid = fillTable(tableSize);

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
