function FormRowSelect(props) {
    const options = [];
    props.options.forEach((e, i) => {
        options.push(<option value={e.value} key={i}>{e.label}</option>);
    });
    
    return (
        <div className={"formInput formSelectRow_" + props.name}>
            <label htmlFor={props.name}>{props.label}</label>
            <select id={props.name} name={props.name} onChange={e => setPropsStateOnChange(e)} defaultValue="default" disabled={props.disabled}>
                {props.default && <option value="default" disabled>{props.default}</option>}
                {options}
            </select>
        </div>
    );

    function setPropsStateOnChange(e){
        if(props.onChangeState){
            return props.onChangeState(document.getElementById(props.name).value);
        }
    }
}

export default FormRowSelect;
