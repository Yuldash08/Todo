import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <ul>
        {
          <props className="todos"></props>
        }
        <Todo/>
    </ul>
  );
}

export default TodoList;
