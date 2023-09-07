function DataTableRow(props) {
    
    const rowData = props.data.map((e, i) => <td key={"row-" + props.id + "-" + i}>{e}</td>)

    return (
        <tr>
            {rowData}
        </tr>
    );
}

export default DataTableRow;
