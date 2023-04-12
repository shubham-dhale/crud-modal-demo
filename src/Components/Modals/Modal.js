import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import AddEditForm from "../Forms/FormAddEdit";
import CloseButton from 'react-bootstrap/CloseButton';

function ModalForm(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

//   const toggle = () => {
//     console.log(modal)
//     setModal(true);
//     console.log(modal)
//   };
  
//   const closeBtn = (
//     <button className="close" onClick={toggle}>
//       xxx
//     </button>
//   );
  const label = props.buttonLabel;

  let button = "";
  let title = "";
  if (label === "Edit") {
    button = (
      <button
        className="btn btn-warning btn-sm"
        style={{ float: "left", marginRight: "10px" }}
        onClick={handleShow}
        >
        {label}
      </button>
    );
    title = "Edit Item";
  } else {
    button = (
      <button
        className="btn btn-primary btn-sm"
        onClick={handleShow}
        style={{ float: "left", marginRight: "10px" }}
      >
        {label}
      </button>
    );
    title = "Add New Item";
  }

  return (
    <div>
      {button}
      <Modal
        show={show}
        onHide={handleClose}
        className={props.className}
      >
        <Modal.Header  closeButton>
          {title}
        </Modal.Header>
        <Modal.Body>
          <AddEditForm
            addItemToState={props.addItemToState}
            updateState={props.updateState}
            student={props.student}
            item={props.item}
            onClick={handleClose}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalForm;
