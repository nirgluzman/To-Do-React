import { useState } from "react";
import Header from "./components/header/Header";
import InputForm from "./components/inputform/InputForm";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      task: "Give dog a bath",
      complete: true,
    },
    {
      id: 2,
      task: "Do laundry",
      complete: true,
    },
    {
      id: 3,
      task: "Vacuum floor",
      complete: false,
    },
  ]);

  const handleAddTodo = (task, id) => {
    // setData((prevData) => {
    //   return [...prevData, { id: id, task: task, complete: false }];
    // });
    console.log("function has run");
  };

  const [count, setCount] = useState(0);

  function add() {
    setCount((prev) => prev + 1);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <InputForm handleAddTodo={handleAddTodo} />
        <Todo data={data} />
      </main>
    </div>
  );
}

export default App;
