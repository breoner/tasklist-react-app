import { nanoid } from "nanoid";
import { Component } from "react";
import style from "./TaskList.module.css";

class TaskList extends Component {
  state = {
    inputText: "",
    tasks: [
      { id: nanoid(4), text: "Сходить в зал" },
      { id: nanoid(4), text: "Сделать дз (желательно)" },
      { id: nanoid(4), text: "Сдать дз (по ситуации)" }
    ]
  };

  handlerDelete = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter(({ id }) => id !== taskId)
    }));
  };

  handlerInput = (event) => {
    this.setState({
      inputText: event.target.value
    });
  };

  handlerAdd = () => {
    const { inputText } = this.state;
    if (inputText.trim() === "") return;

    const newTask = {
      id: nanoid(4),
      text: inputText.trim()
    };

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
      inputText: ""
    }));
  };

  render() {
    const { inputText, tasks } = this.state;

    return (
      <div className={style.wrapper}>
        <div className={style.inputBox}>
          <input
            className={style.input}
            onChange={this.handlerInput}
            type="text"
            value={inputText}
            placeholder="Введите задачу..."
          />
          <button className={style.addBtn} onClick={this.handlerAdd}>
            Додати
          </button>
        </div>

        <ul className={style.list}>
          {tasks.map(({ id, text }) => (
            <li className={style.item} key={id}>
              <span className={style.text}>{text}</span>
              <button
                className={style.deleteBtn}
                onClick={() => this.handlerDelete(id)}
              >
                Видалити
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;