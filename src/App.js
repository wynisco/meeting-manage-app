import Home from "./pages/home/index";
import Form from "./pages/createMeeting/index";
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
