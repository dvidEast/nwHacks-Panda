import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import './styles/App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
            <Route index element={<Landing />} />
            <Route path="home" element={<Home />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
