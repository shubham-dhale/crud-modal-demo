import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";

function AddEditForm(props) {
  const [student, setValues] = useState({
    id: Math.random(),
    name: "",
    age: "",
    std: "",
    rollNo: "",
  });

  const onChange = (e) => {
    
    setValues({
      ...student,
      [e.target.name]: e.target.value,
    });
    console.log(student.name)
  };

  const submitFormAdd = (e) => {
    e.preventDefault();

    console.log(e.target.value)
    // props.addItemToState(student);
    // props.onHide();
  };

  const submitFormEdit = (e) => {
    e.preventDefault();

    props.updateState({
        id:"3",
        name:"MARY PETER",
        age:"21",
        std:"XII",
        rollNo:"20030",
    });
    // props.toggle();
  };

  useEffect(() => {
    if (props.item) {
      const { id, name, age, email, std, rollNo } = props.item;
      setValues({ id, name, age, email, std, rollNo });
    }
  }, [props.item]);

  return (
    <div className="container">
      <Form
        className="d-grid"
        onSubmit={props.item ? submitFormEdit : submitFormAdd}
      >
        <Form.Group className="mb-1 formInput ">
          <Form.Label >Name</Form.Label>
          <Form.Control
            className="mb-1"
            type="text"
            placeholder="Enter Name"
            required
            onChange={onChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label >Age</Form.Label>
          <Form.Control
            className="mb-1"
            type="text"
            placeholder="Enter Age"
            // required
            onChange={onChange}
          ></Form.Control>
        </Form.Group>
        <Form.Label >Std</Form.Label>
        <Form.Group>
          <Form.Control
            className="mb-1"
            type="text"
            placeholder="Enter Std"
            // required
            onChange={onChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label >Roll Number</Form.Label>
          <Form.Control
            className="mb-1"
            type="text"
            placeholder="Enter RollNo"
            // required
            onChange={onChange}
          ></Form.Control>
          <div className="d-flex justify-content-end">
            <button
              // onClick={handleSubmit}
              className="btn btn-primary btn-sm mx-1 mb-1"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}

export default AddEditForm;
