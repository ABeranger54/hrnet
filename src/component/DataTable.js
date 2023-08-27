import DataTableRow from "./DataTableRow";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function DataTable(props) {

    const dispatch = useDispatch();
    var dataSort = useSelector((state) => state.sorted);
    if(!dataSort.length){
        dataSort = props.data;
    }

    const head = [];
    const body = [];

    props.columns.forEach((e, i) => {
        head.push(<th onClick={() => sort(e.data)} key={"head" + i}>{e.title}</th>);
    });

    dataSort.forEach((e, i) =>{
        const cols = [];
        props.columns.forEach(col => {
            cols.push(e[col.data]);
        })
        body.push(<DataTableRow key={"row" + i} data={cols} />)
    })

    function sort(colID){
        props.data.sort((a, b) => {
            return a[colID] > b[colID];
        });
        dispatch({type: "setSortedList", payload: {sorted: dataSort}});
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
