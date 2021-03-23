import React, {} from "react";
import ExercicioArray from "./ExercicioArray";
import Eventos from "./Eventos";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form/Form";

const Container = ({ pathname }) => {
  switch (pathname) {
    case "/header":
      return <Header />;
    case "/":
      return <div>principal</div>;
    case "/array":
        return <ExercicioArray/>;
    case "/eventos":
        console.log('opa')
        return <Eventos/>
  }
};

const App = () => {
  let [pathname, setPathname] = React.useState('/');

  return (
    <>
      {" "}
      <ul>
        <li>
          <a href="/header" onClick={(e) => {
              e.preventDefault();
              setPathname('/header')
          }}>
            Header
          </a>
        </li>

        <li>
          <a href="/array" onClick={(e)=>{
              e.preventDefault();
              setPathname('/array');
          }
          }>Array</a>
        </li>

        <li>
          <a href="/eventos" onClick={(e)=>{
              e.preventDefault();
              setPathname('/eventos');
          }}>Eventos</a>
        </li>

        <li>
          <a href="/form">Form</a>
        </li>
      </ul>
      <Container pathname={pathname}></Container>
    </>
  );
};

export default App;
