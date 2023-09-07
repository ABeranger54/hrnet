import { useState } from "react";
import DataTableRow from "./DataTableRow";
import "../style/dataTable.css"
import React from "react";
import FormRowSelect from "./FormRowSelect";

function DataTable(props) {

    //States definition
    const [filterValue, setFilterValue] = useState(null);
    const [ascOrder, setAscOrder] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const [entriesCountValue, setEntriesCountValue] = useState(3);
    const [pageValue, setPageValue] = useState(0)

    //Display values definition
    const head = props.columns.map((e, i) => <th onClick={() => sort(e.data)} key={"head" + i}>{e.title}</th>);
    const body = [];

    //Search filter
    const data = props.data.filter(row => {
        var included = false;
        props.columns.forEach((c) => {
            if(row[c.data]){
                if(row[c.data].toLowerCase().includes(searchValue.toLowerCase())){
                    included = true;
                }
            }
        })
        return included;
    })

    //Sort filter
    if(filterValue){
        data.sort((a, b) => {
            if(ascOrder){
                return a[filterValue] > b[filterValue];
            }else{
                return a[filterValue] < b[filterValue];
            }
        });
    }

    //Paging filter
    const fData = data.filter((e, i) => {
        return (i >= pageValue * entriesCountValue && i < pageValue * entriesCountValue + entriesCountValue);
    })

    //Creating DataTableRow components into body to be displayed
    fData.forEach((e, i) =>{
        const cols = props.columns.map((col) => e[col.data]);
        body.push(<DataTableRow key={"row-" + i} data={cols} id={i} />)
    })

    //Sort by columns in Ascend/Descend values
    function sort(colID){
        if(colID === filterValue){
            setAscOrder(!ascOrder);
        }else{
            setFilterValue(colID);
        }
    }

    //Define entries count to be displayed, called by FormRowSelect function callback (onChange)
    function reduceRows(count){
        setEntriesCountValue(parseInt(count));
    }

    //Setting page id to display
    function setPage(pageID){
        if(pageID <= Math.floor(props.data.length / entriesCountValue) && pageID >= 0){
            setPageValue(pageID);
        }
    }

    //Filter by search terms
    function search(val){
        setSearchValue(val);
        setPage(0);
    }

    //Define all options values about entries per page count
    const entriesPerPageSelect = ["1", "2", "3", "4", "5", "6", "7", "8"];

    return (
        <div className="dataTable">
            <div className="dataTableTop">
                <div className="entriesCountDiv">
                    <FormRowSelect name="entriesCount" label="Show" onChangeState={reduceRows} options={entriesPerPageSelect.map(e => {return {value: e, label: e}})} />
                    entries
                </div>
                <div className="searchDiv">
                    <label className="searchLabel" htmlFor="search">Search:</label>
                    <input type="text" className="search" onChange={() => search(document.querySelector(".search").value)} />
                </div>
            </div>
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
            <p className="previous" onClick={() => setPage(pageValue - 1)}>Previous</p>
            <p className="next" onClick={() => setPage(pageValue + 1)}>Next</p>
        </div>
    );
}

export default DataTable;
