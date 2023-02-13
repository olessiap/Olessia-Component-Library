import { useState } from 'react';
import './generatedTable.scss';

export const GeneratedTable = () => {
    const [rows, setRows] = useState(0);
    const [columns, setColumns] = useState(0);

    function handleSubmit(e: any) {
        e.preventDefault()
        const data = new FormData(e.target);
        const rows = data.get("rows");
        setRows(Number(rows));
        const columns = data.get('columns');
        setColumns(Number(columns));
    }

    console.log('rows: ', rows)
    console.log('Boolean(rows)', Boolean(rows));

    return (
        <div className="main-container">
            <form onSubmit={(e) => handleSubmit(e)} className="form">
                <label htmlFor="Rows">Rows</label>
                <input
                    id="rows"
                    name="rows"
                    type="number"
                    min={1}
                    defaultValue={rows}
                    className="input" />
                <label htmlFor="Columns">Columns</label>
                <input
                    id="columns"
                    name="columns"
                    type="number"
                    min={1}
                    defaultValue={columns}
                    className="input" />
                <button type="submit" className="submit-button">Submit</button>
            </form>
            {Boolean(rows) && Boolean(columns) && (
                <Table rows={rows} columns={columns} />

            )}
        </div>
    );
}

const Table = (props: Props) => {
    return (
        <table>
            <tbody>
                {Array.from({ length: props.rows }, () => 0).map(
                    (_, row) => (
                        <tr key={row}>
                            {Array.from({ length: props.columns }, () => 0).map(
                                (_, col) => (
                                    <td key={col} className="cell">
                                        {col % 2 === 0
                                            ? props.rows * col + (row + 1)
                                            : props.rows * (col + 1) - row}
                                    </td>
                                ),
                            )}
                        </tr>
                    ),
                )}
            </tbody>

        </table>
    )
}

interface Props {
    rows: number;
    columns: number;
}