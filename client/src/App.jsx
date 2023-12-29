import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/contact" element = {<Contact/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
