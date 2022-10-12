import "./App.css";
import GamesApp from "./components/GamesApp/GamesApp";
import TodosApp from "./components/TodosApp/TodosApp";
import Navbar from "./components/Navbar/Navbar";
import LoginApp from "./components/LoginApp/LoginApp";
import CounterApp from "./components/CounterApp/CounterApp";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/react-workshop">
        <Navbar />
        {/* Check url 
        / => <HomePage />
        /todos => <TodosApp />
      */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todos" element={<TodosApp />} />
          <Route path="/games" element={<GamesApp />} />
          <Route path="/login" element={<LoginApp />} />
          <Route path="/counter" element={<CounterApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
