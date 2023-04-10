import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddUser from "./components/AddUser";
import ViewUser from "./components/ViewUser";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter className="App">
      <NavBar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/adduser" element={<AddUser/>}/>
            <Route path="/viewuser" element={<ViewUser/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
