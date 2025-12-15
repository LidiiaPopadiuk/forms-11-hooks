import { useState, useEffect } from "react";
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
`;

const App = () => {

  const [todos, setTodos] = useState(initialTodos)
  const [filter, setFilter] = useState("")

  const onTarget = (id) => {
    const newData = todos.map((dt) => {
      if (dt.id === id) {
        return { ...dt, completed: !dt.completed };
      }
      return dt;
    });
    setTodos(newData);
  };

  const createNewtodo = (value) => {
    const newTodo = {
      id: nanoid(),
      text: value,
      completed: false,
    };
    setTodos([...todos, newTodo])
    // this.setState((prevState) => ({
    //   todos: [...prevState.todos, newTodo],
    // }));
  };

  const deleteData = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
    // this.setState((prevState) => ({
    //   todos: prevState.todos.filter((todo) => todo.id !== id),
    // }));
  };

  const filterData = (data) => {
    setFilter(data)
    //! dont do it setFilter(filter = data)
    // this.setState({
    //   filter: data,
    // });
  };

  return (
    <StyleMaindiv className="App">
      <GlobalStyle />
      <Info infoData={todos} />
      <TodoEditor addTodo={createNewtodo} />
      <Filter filterInfo={filterData} />
      <TodoList
        onTarget={onTarget}
        initialData={todos}
        initialFilter={filter}
        deleteData={deleteData}
      />
    </StyleMaindiv>
  );
};

export default App;
