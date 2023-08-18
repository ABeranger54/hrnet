function FormRowSelect(props) {
    const options = [];
    props.options.forEach((e, i) => {
        options.push(<option value={e[0]} key={i}>{e[1]}</option>);
    });
    
    return (
        <div className="formInput formSelectRow">
            <label htmlFor={props.name}>{props.label}</label>
            <select id={props.name} name={props.name} onChange={e => setPropsStateOnChange(e)} defaultValue="Sélectionner" disabled={props.disabled}>
                <option value="Sélectionner" disabled>Sélectionner</option>
                {options}
            </select>
        </div>
    );

    function setPropsStateOnChange(e){
        console.log(e);
        if(props.onChangeState){
            return props.onChangeState(document.getElementById(props.name).value);
        }
    }
}

export default FormRowSelect;
