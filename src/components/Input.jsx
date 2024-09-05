import { useRef, useState } from "react";
import css from "./Input.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";

function Input({ clicked }) {
  const todoEnterTodo = useRef();
  const todoEnterDate = useRef();

  const values = (event) => {
    event.preventDefault();
    let todo = todoEnterTodo.current.value;
    let date = todoEnterDate.current.value;
    clicked(todo, date);
    todoEnterTodo.current.value = "";
    todoEnterDate.current.value = "";
  };

  return (
    <center>
      <form onSubmit={values} className={`container ${css["container-input"]}`}>
        <div className="row">
          <div className="col-6">
            <input
              ref={todoEnterTodo}
              classNameName={`${css["input-box"]}`}
              type="text"
              placeholder="Enter Todo"
            />
          </div>
          <div className="col-4">
            <input
              ref={todoEnterDate}
              classNameName={`${css["input-box"]}`}
              type="date"
            />
          </div>
          <div className="col-2">
            <button className={` btn btn-success ${css["add-btn"]}`}>
              <IoIosAddCircleOutline />
            </button>
          </div>
        </div>
      </form>
    </center>
  );
}

export default Input;
