import { createContext, useReducer, useState } from "react";
import ComponentOne from "./components/ComponentOne";
import CompomentTwo from "./components/ComponentTwo";
import "./App.css";

export const Data = createContext();

const App = () => {
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "incriment":
        return state + 1;
      case "decriment":
        return state - 1;
      case "reset":
        return 0;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(counterReducer, 0);
  const [count, setCount] = useState(0);

  const [name, setName] = useState([
    {
      firstName: "Shakib",
      lastName: "Rahman",
      age: 28,
    },
    {
      firstName: "Rahat",
      lastName: "Rahman",
      age: 27,
    },
  ]);

  const changeNameHandaler = (f) => {
    setName(
      name.map((item) => {
        return {
          ...item,
          firstName: "Rk",
          lastName: "CK",
        };
      })
    );
  };
  const changeAgeHandaler = (f) => {};

  const [todos, setTodos] = useState([]);

  const [todoValue, setTodoValue] = useState("");

  const haqndleSubmit = (e) => {
    e.preventDefault();
    if (todoValue.trim()) {
      setTodos([...todos, todoValue]);
    }
  };
  const handleInputChange = (e) => {
    setTodoValue(e.target.value);
  };
  const removeTodos = (index) => {
    console.log(index);
    setTodos(todos.filter((item, i) => i !== index));
  };
  const name1 = "Shakib";

  return (
    <div className="App">
      <h1>Hello Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Incriment</button>
      <button onClick={() => (count > 0 ? setCount(count - 1) : null)}>
        Decriment
      </button>
      <ComponentOne count={count} onClickHandaler={() => setCount(count + 1)} />
      <CompomentTwo
        count={count}
        onClickHandaler={() => (count > 0 ? setCount(count - 1) : null)}
      />
      {name.map((item, index) => (
        <div key={index}>
          <h1>{item.firstName}</h1>
          <h2>{item.lastName}</h2>
          <h3>{item.age}</h3>
        </div>
      ))}
      <button onClick={changeNameHandaler}>Change Name</button>
      <button onClick={changeAgeHandaler}>Change Age</button>
      <form onSubmit={haqndleSubmit}>
        <h1>Todo List</h1>
        {todos.map((item, index) => (
          <div key={index}>
            <h1>{item}</h1>{" "}
            <a href="#" onClick={() => removeTodos(index)}>
              Remove
            </a>
          </div>
        ))}
        <input type="text" value={todoValue} onChange={handleInputChange} />

        <button type="submit">Add</button>
      </form>
      <Data.Provider value={name1}>
        <ComponentOne />
        <CompomentTwo />
      </Data.Provider>
      counter: {state}
      <button onClick={() => dispatch({ type: "incriment" })}>Incriment</button>
      <button onClick={() => dispatch({ type: "decriment" })}>Decriment</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default App;
