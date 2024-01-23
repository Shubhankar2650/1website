import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Navbar } from "./components/Navbar";
import { PageNotFound} from "./pages/error";
import { Services } from "./pages/services";
import { Register } from "./pages/register";
import { Foot } from "./components/foot";


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/services" element = {<Services/>} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/register" element = {<Register/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="*" element = {<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
    <Foot />
  </>
  );
}

export default App;
