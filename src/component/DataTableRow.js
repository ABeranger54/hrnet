function DataTableRow(props) {

    const rowData = [];

    props.data.forEach(e => {
        rowData.push(<td>{e}</td>)
    });

    return (
        <tr>
            {rowData}
        </tr>
    );
}

export default DataTableRow;
