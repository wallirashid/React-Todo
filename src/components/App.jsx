import React, { useState } from "react";
import SearchBar from "./SearchBar";
import RenderList from "./RenderList";
import { Container } from "@material-ui/core";
import "./main.css";
import { v4 as uuidv4 } from "uuid";
const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todoTextDetail, setTodoTextDetail] = useState([]);
  const [status, setStatus] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  // const [id, setId] = useState(uuidv4());
  const handleSubmit = (e) => {
    if (todoText.length > 0) {
      e.preventDefault();
      setTodoText("");
      const todoData = {
        id: uuidv4(),
        inputVal: todoText,
      };
      const Detail = [...todoTextDetail];
      Detail.push(todoData);
      setTodoTextDetail(Detail);
      setTodoText("");
    }
  };
  const handleChangeInput = (e) => {
    setTodoText(e.target.value);
  };
  const handleDelete = (id) => {
    const filteredItems = todoTextDetail.filter((item) => item.id !== id);
    setTodoTextDetail(filteredItems);
  };
  const clearList = (e) => {
    setTodoTextDetail("");
    setTodoText("");
    setEditTask(false);
  };
  const handleEdit = (editId, editTodoText) => {
    let todo = {
      id: editId,
      inputVal: editTodoText,
    };
    setSelectedTodo(todo);
    setTodoText(editTodoText);
    setEditTask(true);
  };
  const handleItemSubmit = (e) => {
    let updatedTodo = {
      ...selectedTodo,
      inputVal: todoText,
    };
    let filteredList = todoTextDetail.filter((todo) => {
      return todo.id !== selectedTodo.id;
    });
    setTodoTextDetail([...filteredList, updatedTodo]);
  };

  return (
    <>
      <Container>
        <SearchBar
          todoText={todoText}
          handleSubmit={handleSubmit}
          handleChangeInput={handleChangeInput}
          editTask={editTask}
          handleItemSubmit={handleItemSubmit}
        />
        <RenderList
          todoTextDetail={todoTextDetail}
          clearList={clearList}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </Container>
    </>
  );
};
export default App;
