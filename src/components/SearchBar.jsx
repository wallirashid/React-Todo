import React from "react";
import { TextField, Button } from "@material-ui/core";
import "./main.css";

const SearchBar = ({
  todoText,
  handleSubmit,
  handleChangeInput,
  editTask,
  handleItemSubmit,
}) => {
  return (
    <>
      <div className="form-search">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            placeholder="Task"
            onChange={handleChangeInput}
            value={editTask == true ? todoText : todoText}
          />
          {editTask == true ? (
            <>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleItemSubmit}
                // disabled={todoText.length == 0 ? true : ""}
              >
                Edit Task
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                // disabled={todoText.length == 0 ? true : ""}
              >
                Add Task
              </Button>
            </>
          )}
        </form>
      </div>
    </>
  );
};
export default SearchBar;
