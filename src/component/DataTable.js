import { useState } from "react";
import DataTableRow from "./DataTableRow";
import "../style/dataTable.css"
import React from "react";
import FormRowSelect from "./FormRowSelect";

function DataTable(props) {

    const [filterValue, setFilterValue] = useState(null);
    const [ascOrder, setAscOrder] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const [entriesCountValue, setEntriesCountValue] = useState("3");
    const [pageValue, setPageValue] = useState("0")

    const body = [];

    const head = props.columns.map((e, i) => <th onClick={() => sort(e.data)} key={"head" + i}>{e.title}</th>);

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

    if(filterValue){
        data.sort((a, b) => {
            if(ascOrder){
                return a[filterValue] > b[filterValue];
            }else{
                return a[filterValue] < b[filterValue];
            }
        });
    }

    var ct = 0;
    data.forEach((e, i) =>{
        if(ct < entriesCountValue && i >= pageValue * entriesCountValue && i < pageValue * entriesCountValue + entriesCountValue){
            const cols = props.columns.map((col) => e[col.data]);
            body.push(<DataTableRow key={"row-" + i} data={cols} id={i} />)
            ct++;
        }
    })

    function sort(colID){
        if(colID === filterValue){
            setAscOrder(!ascOrder);
        }else{
            setFilterValue(colID);
        }
    }

    function reduceRows(count){
        setEntriesCountValue(count);
    }

    function setPage(pageID){
        if(pageID <= Math.floor(props.data.length / entriesCountValue) && pageID >= 0){
            setPageValue(pageID);
        }
    }

    function search(val){
        setSearchValue(val);
    }

    return (
        <div className="dataTable">
            <div className="dataTableTop">
                <div className="entriesCountDiv">
                    <FormRowSelect name="entriesCount" label="Show" onChangeState={reduceRows} options={[["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"]]} />
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
