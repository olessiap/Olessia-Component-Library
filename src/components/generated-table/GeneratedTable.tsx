import { useState } from 'react';
import './generatedTable.scss';

export const GeneratedTable = () => {
    const [rows, setRows] = useState('');
    const [columns, setColumns] = useState('');
    const [numberOfCells, setNumberOfCells] = useState(0);

    function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault()
        setNumberOfCells(Number(rows) * Number(columns));
    }

    return (
        <div className="main-container">
            <form onSubmit={handleSubmit} className="form">
                <label>
                    Rows
                    <input type="number" value={rows} onChange={(e) => setRows(e.target.value)} className="input" />
                </label>
                <label>
                    Columns
                    <input type="number" value={columns} onChange={(e) => setColumns(e.target.value)} className="input" />
                </label>
                <input type="submit" value="Submit" className="submit-button" />
            </form>
            <div
                className="table-container"
                style={{ gridTemplateColumns: `repeat(${columns}, 40px)` }}
            >
                {Array(numberOfCells).fill(null).map((_, index) => {
                    return (
                        <div className="cell" key={index}>{index + 1}</div>
                    )
                })}
            </div>
        </div>
    );
}