/*
* WARNING: this page is not used anymore, and is only used to preview of the published package
* This component has been converted to npm package : https://www.npmjs.com/package/@aberanger/data-table?activeTab=code
*/

/*
* DataTableRow component
* Represents a row in a Table, used in DataTable
*
* @props data: Array of values, each value corresponding to a column
* @props id: id of the row in the table
*/
function DataTableRow(props) {
    
    //Array of <td>
    const rowData = props.data.map((e, i) => <td key={"row-" + props.id + "-" + i}>{e}</td>)

    return (
        <tr>
            {rowData}
        </tr>
    );
}

export default DataTableRow;
