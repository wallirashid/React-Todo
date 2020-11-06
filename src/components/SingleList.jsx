import React, { useState } from "react";
const SingleList = (props) => {
  const [status, setStatus] = useState(false);
  const handleCheck = (currentId) => {
    if (currentId) {
      setStatus(true);
    }
  };
  return (
    <>
      <li>
        <span className={status === true ? "success-line" : "without-line"}>
          {props.todoTextData.inputVal}
        </span>
        <span>
          <i
            onClick={() => handleCheck(props.todoTextData.id)}
            className={`fa fa-check success-style`}
          ></i>
          <i
            className="fa fa-edit edit-style"
            onClick={() => {
              props.handleEdit(
                props.todoTextData.id,
                props.todoTextData.inputVal
              );
            }}
          ></i>
          <i
            className="fa fa-times danger-style"
            onClick={() => {
              props.handleDelete(props.todoTextData.id);
            }}
          ></i>
        </span>
      </li>
    </>
  );
};
export default SingleList;
