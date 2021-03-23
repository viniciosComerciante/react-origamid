import React from "react";
import ExercicioArray from "./ExercicioArray";
import Eventos from "./Eventos";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form/Form";
import State from "./State";

const Container = ({ pathname }) => {
  switch (pathname) {
    case "/header":
      return <Header />;
    case "/":
      return <div>principal</div>;
    case "/array":
      return <ExercicioArray />;
    case "/eventos":
      return <Eventos />;
    case "/form":
      return <Form />;
    case "/state":
      return <State />;
    default:
      return <div>Principal</div>;
  }
};

const App = () => {
  let [pathname, setPathname] = React.useState("/");

  return (
    <>
      {" "}
      <ul>
        <li>
          <a
            href="/header"
            onClick={(e) => {
              e.preventDefault();
              setPathname("/header");
            }}
          >
            Header
          </a>
        </li>

        <li>
          <a
            href="/array"
            onClick={(e) => {
              e.preventDefault();
              setPathname("/array");
            }}
          >
            Array
          </a>
        </li>

        <li>
          <a
            href="/eventos"
            onClick={(e) => {
              e.preventDefault();
              setPathname("/eventos");
            }}
          >
            Eventos
          </a>
        </li>

        <li>
          <a
            href="/form"
            onClick={(e) => {
              e.preventDefault();
              setPathname("/form");
            }}
          >
            Form
          </a>
        </li>

        <li>
          <a
            href="/state"
            onClick={(e) => {
              e.preventDefault();
              setPathname("/state");
            }}
          >
            State
          </a>
        </li>
      </ul>
      <Container pathname={pathname}></Container>
      <Footer></Footer>
    </>
  );
};

export default App;
