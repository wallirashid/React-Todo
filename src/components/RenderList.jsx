import React from "react";
import SingleList from "./SingleList";
import "./renderList.css";
import Button from "@material-ui/core/Button";
const RenderList = ({
  todoTextDetail,
  status,
  clearList,
  handleDelete,
  handleCheck,
  handleEdit,
}) => {
  return (
    <>
      <h2>Tasks List</h2>
      <ul className="listing-styling">
        {todoTextDetail.length > 0 ? (
          todoTextDetail.map((todoTextData) => {
            return (
              <SingleList
                todoTextData={todoTextData}
                key={todoTextData.id}
                todoTextDetail={todoTextDetail}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            );
          })
        ) : (
          <></>
        )}
      </ul>
      <Button variant="contained" color="secondary" onClick={clearList}>
        Clear List
      </Button>
    </>
  );
};
export default RenderList;
