import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeHandler(){
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions" onClick={deleteHandler}>
        <button className="btn">Delete</button>
      </div>
      {modalIsOpen ? <Modal onCancel={closeHandler} onConfirm={closeHandler}/> : null}
      {modalIsOpen ? <Backdrop onCancel={closeHandler}/> : null}
    </div>
  );
}

export default Todo;
