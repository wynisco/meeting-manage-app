import Home from "./pages/home/index";
import Form from "./pages/createMeeting/index";
import Calender from "./pages/calender/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calender />} />
        <Route path="/create-meeting/:email" element={<Form />} />
        <Route path="/blocks" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
