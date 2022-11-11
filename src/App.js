import { useState } from "react";
import Header from "./components/header/Header";
import TaskManager from "./components/taskmanager/TaskManager";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TaskManager />
      </main>
    </div>
  );
}

export default App;
