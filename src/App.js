import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./components/Produtos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contato from "./components/Contato";
import Produto from './components/Produto';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos></Produtos>}></Route>
            <Route path="produto/:id" element={<Produto></Produto>}></Route>
            <Route path="contato" element={<Contato></Contato>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
