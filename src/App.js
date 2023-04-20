import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/index";
import Form from "./components/form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-meeting" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
