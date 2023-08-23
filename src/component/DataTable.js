import DataTableRow from "./DataTableRow";

function DataTable(props) {

    const head = [];
    const body = [];

    props.columns.forEach((e, i) => {
        head.push(<th key={"head" + i}>{e.title}</th>);
    });

    props.data.forEach((e, i) =>{
        const cols = [];
        props.columns.forEach(col => {
            cols.push(e[col.data]);
        })
        body.push(<DataTableRow key={"row" + i} data={cols} />)
    })

    return (
        <table>
            <thead>
                <tr>
                    {head}
                </tr>
            </thead>
            <tbody>
                {body}
            </tbody>
        </table>
    );
}

export default DataTable;
