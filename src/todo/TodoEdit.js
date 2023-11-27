import React, { useState } from "react";

export default function TodoEdit() {
  const [input, setInput] = useState("");
  const [editVal, setEditVal] = useState("");
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleButtonClick = () => {
    if (input) {
      // setTodo([...todo, input]);
      todo.push(input);
      setTodo(todo);
      setInput("");
    }
  };
  const handleEdit = (ind) => {
    setEditVal(todo[ind]);
    setEditIndex(ind);
  };
  const handleEditInput = (e) => {
    console.log(e.target.value);
    setEditVal(e.target.value);
  };
  const handleSave = () => {
    todo[editIndex] = editVal;
    setTodo(todo);
    setEditIndex(-1);
  };
  const handleDelete = (ind) => {
    //todo.splice(ind, 1);// donot do this
    //setTodo(todo);
    const updated = todo.filter((item, index) => ind != index);
    setTodo(updated);
  };
  return (
    <div>
      <input
        type="text"
        name=""
        value={input}
        id=""
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>add</button>
      {todo.map((item, ind) => {
        return (
          <>
            <div key={ind}>
              {editIndex == ind ? (
                <>
                  <input
                    type="text"
                    className="input-group"
                    value={editVal}
                    onChange={(e) => handleEditInput(e)}
                  />{" "}
                  <button onClick={handleSave}>save</button>{" "}
                  <button onClick={() => setEditIndex(-1)}>cancel</button>
                </>
              ) : (
                <span>
                  {item} <button onClick={() => handleEdit(ind)}>edit</button>{" "}
                  <button onClick={() => handleDelete(ind)}>delete</button>
                </span>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
}
