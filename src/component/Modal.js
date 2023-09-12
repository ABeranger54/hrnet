import { useDispatch, useSelector } from "react-redux";
import "../style/modal.css"
import closeIcon from"../media/close.png"

/*
* Modal component
* Represent a modal centered and superimposed on the main page content
* Can be closed using a close button
*
* @props content: text content to be displayed
*/
function Modal(props) {
    const dispatch = useDispatch();

    //Retrieve open state value
    var isOpen = useSelector((state) => state.modalOpen);

    if(isOpen){
        return (
            /* close modal on click on the background */
            <div id="modal" onClick={(e) => dispatch({type: "switchModal", payload: {open: false}})}>
                <div id="mainModal">
                    <div>
                        {props.content}
                    </div>
                    {/* close modal on click on the close button */}
                    <img src={closeIcon} alt="Close modal" onClick={(e) => dispatch({type: "switchModal", payload: {open: false}})} />
                </div>
            </div>
          );
    }
}

export default Modal;
