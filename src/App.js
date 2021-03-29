import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Sobre from './Sobre';
import Header from './Header';
import Footer from './Footer';
import NaoEncontrada from './NaoEncontrada';
import Login from './Login';
import Produto from './Produto';

const App = () => {
  return <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="sobre" element={<Sobre></Sobre>}></Route>
      <Route path="login" element={<Login></Login>}></Route>
      <Route path="produto/:id" element={<Produto></Produto>}></Route>
      <Route path="*" element={<NaoEncontrada></NaoEncontrada>}></Route>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
}

export default App
