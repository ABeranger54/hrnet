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
    const head = props.columns.map((e, i) => <th onClick={() => onHeaderClick(e.data)} key={"head" + i}>{e.title}</th>);

    //Search filter
    const data = props.data.filter(row => {
        const included = props.columns.filter((c) => {
            return row[c.data] && row[c.data].toLowerCase().includes(searchValue.toLowerCase());
        })
        return included.length;
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
    const entriesLower = pageValue * entriesCountValue;
    const entriesUpper = pageValue * entriesCountValue + entriesCountValue;
    const fData = data.filter((e, i) => {
        return (i >= entriesLower && i < entriesUpper);
    })

    //Creating DataTableRow components into body to be displayed
    const body = fData.map((e, i) => <DataTableRow key={"row-" + i} data={props.columns.map((col) => e[col.data])} id={i} />)

    //Sort by columns in Ascend/Descend values
    function onHeaderClick(colID){
        if(colID === filterValue){
            setAscOrder(!ascOrder);
        }else{
            setFilterValue(colID);
        }
    }

    //Define entries count to be displayed, called by FormRowSelect function callback (onChange)
    function reduceRows(count){
        setEntriesCountValue(parseInt(count));
        setPage(0);
    }

    //Setting page id to display
    function setPage(pageID){
        if(pageID <= Math.floor(props.data.length / entriesCountValue) && pageID >= 0){
            if(pageID < pageValue || (pageID > pageValue && pageValue * entriesCountValue + 2 <= data.length)){
                setPageValue(pageID);
            }
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
                    <input type="text" className="search" onChange={(e) => search(e.target.value)} />
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        {head}
                    </tr>
                </thead>
                {body.length > 0 && <tbody>{body}</tbody>}
            </table>
            {!body.length && <p className="tableNoElement">No data available in table</p>}
            <div className="dataTableBottom">
                <div>
                    Showing {(data.length) ? entriesLower + 1 : 0} to {(entriesUpper > data.length) ? data.length : entriesUpper} of {data.length} entries
                </div>
                <div className="pageNavigator">
                    <p className="previous" onClick={() => setPage(pageValue - 1)}>Previous</p>
                    <p className="next" onClick={() => setPage(pageValue + 1)}>Next</p>
                </div>
            </div>
        </div>
    );
}

export default DataTable;
