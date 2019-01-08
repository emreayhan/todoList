import React, { Component } from "react";
import todo from "../api/todo";
class Anasayfa extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  state = {
    todos: this.props.todos
  };

  render() {
    return (
      <div>
        <h2>To Do List</h2>
        <div>
          {this.state.todos.map((el, i) => {
            if (el.completed == false) {
              return (
                <li key={el.name}>
                  {el.name}
                  <button onClick={() => this.markAsCompleted(el)}>
                    mark as completed
                  </button>
                </li>
              );
            }
          })}
        </div>
        <h2>Dones</h2>
        <div>
          {this.state.todos.map(el => {
            if (el.completed == true) {
              return <li key={el.name}>{el.name}</li>;
            }
          })}
        </div>
      </div>
    );
  }
}

export default Anasayfa;
