function DataTableRow(props) {

    const rowData = [];

    props.data.forEach((e, i) => {
        rowData.push(<td key={"row-" + props.id + "-" + i}>{e}</td>)
    });

    return (
        <tr>
            {rowData}
        </tr>
    );
}

export default DataTableRow;
