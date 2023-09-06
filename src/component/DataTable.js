import { useState } from "react";
import DataTableRow from "./DataTableRow";
import "../style/dataTable.css"

function DataTable(props) {

    const [filterValue, setFilterValue] = useState(null);
    const [ascOrder, setAscOrder] = useState(true);

    const head = [];
    const body = [];

    props.columns.forEach((e, i) => {
        head.push(<th onClick={() => sort(e.data)} key={"head" + i}>{e.title}</th>);
    });

    if(filterValue){
        props.data.sort((a, b) => {
            if(ascOrder){
                return a[filterValue] > b[filterValue];
            }else{
                return a[filterValue] < b[filterValue];
            }
        });
    }
    
    props.data.forEach((e, i) =>{
        const cols = [];
        props.columns.forEach(col => {
            cols.push(e[col.data]);
        })
        body.push(<DataTableRow key={"row-" + i} data={cols} id={i} />)
    })

    function sort(colID){
        if(colID === filterValue){
            setAscOrder(!ascOrder);
        }else{
            setFilterValue(colID);
        }
        
    }

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
