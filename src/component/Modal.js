import { useDispatch, useSelector } from "react-redux";
import "../style/modal.css"
import closeIcon from"../media/close.png"

function Modal(props) {

    const dispatch = useDispatch();
    var isOpen = useSelector((state) => state.modalOpen);

    if(isOpen){
        return (
            <div id="modal" onClick={(e) => dispatch({type: "switchModal", payload: {open: false}})}>
                <div id="mainModal">
                    <div>
                        {props.content}
                    </div>
                    <img src={closeIcon} alt="Close modal" onClick={(e) => dispatch({type: "switchModal", payload: {open: false}})} />
                </div>
            </div>
          );
    }
}

export default Modal;
