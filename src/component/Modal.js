import "../style/modal.css"
import closeIcon from"../media/close.png"

function Modal(props) {
    if(props.open[0]){
        return (
            <div id="modal" onClick={(e) => props.open[1](false)}>
                <div id="mainModal">
                    <div>
                        {props.content}
                    </div>
                    <img src={closeIcon} alt="Close modal" onClick={(e) => props.open[1](false)} />
                </div>
                
            </div>
          );
    }
}

export default Modal;
