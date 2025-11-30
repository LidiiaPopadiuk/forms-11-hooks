import { Component } from "react";
import initialTodos from "./todo.json";
import { TodoList } from "./components/TodoList";
import { TodoEditor } from "./components/TodoEditor";
import { Filter } from "./components/Filter";
import { Info } from "./components/Info";
import { nanoid } from "nanoid";
import { GlobalStyle } from "./GlobalStyle";
import styled from "styled-components";
import "./App.css";

const StyleMaindiv = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
  };

  onTarget = (id) => {
    const newData = this.state.todos.map((dt) => {
      if (dt.id === id) {
        return { ...dt, completed: !dt.completed };
      }
      return dt;
    });
    this.setState({ todos: newData });
  };

  createNewtodo = (value) => {
    const newTodo = {
      id: nanoid(),
      text: value,
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  deleteData = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  FilterData = (data) => {
    this.setState({
      filter: data,
    });
  };

  render() {
    return (
      <StyleMaindiv className="App">
        <GlobalStyle />
        <Info infoData={this.state}/>
        <TodoEditor addTodo={this.createNewtodo} />
        <Filter filterInfo={this.FilterData}/>
        <TodoList
          onTarget={this.onTarget}
          initialData={this.state}
          deleteData={this.deleteData}
        />
      </StyleMaindiv>
    );
  }
}

export default App;
