// import React from 'react'
// import Radio from './Form/Radio'

// const perguntas = [
//   {
//     pergunta: 'Qual método é utilizado para criar componentes?',
//     options: [
//       'React.makeComponent()',
//       'React.createComponent()',
//       'React.createElement()',
//     ],
//     resposta: 'React.createElement()',
//     id: 'p1',
//   },
//   {
//     pergunta: 'Como importamos um componente externo?',
//     options: [
//       'import Component from "./Component"',
//       'require("./Component")',
//       'import "./Component"',
//     ],
//     resposta: 'import Component from "./Component"',
//     id: 'p2',
//   },
//   {
//     pergunta: 'Qual hook não é nativo?',
//     options: ['useEffect()', 'useFetch()', 'useCallback()'],
//     resposta: 'useFetch()',
//     id: 'p3',
//   },
//   {
//     pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
//     options: ['set', 'get', 'use'],
//     resposta: 'use',
//     id: 'p4',
//   },
// ];

//  const App = () => {

//   const [respostas, setRespostas] = React.useState({
//     p1: '',
//     p2: '',
//     p3: '',
//     p4: ''
//   })

//   function handleChange({target}){
//     setRespostas({...respostas, [target.id]: target.value})
//   }

//   return (
//     <div>

//       {perguntas.map(pergunta=>(
//         <Radio {...pergunta} key={pergunta.id} value={respostas[pergunta.id]} onChange={handleChange}></Radio>
//       ))}

//     </div>
//   )
// }

// export default App;

import React from "react";
import Radio from "./Form/Radio";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const App = () => {
  const [resposta, setResposta] = React.useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });

  const [slide, setSlide] = React.useState(0);
  const [acertos, setAcertos] = React.useState(0);

  function handleChange(e) {
    const perguntaId = e.target.id;
    setResposta({ ...resposta, [perguntaId]: e.target.value });
  }

  function evaluate() {
    perguntas.forEach((pergunta, index) => {
      if (pergunta.resposta === resposta[pergunta.id]) {
        setAcertos((atual) => {
          return atual + 1;
        });
      }
    });
  }

  if (slide <= perguntas.length - 1) {
    return (
      <div>
        {perguntas.map((pergunta, index) => (
          <Radio
            title={pergunta.pergunta}
            options={pergunta.options}
            key={pergunta.id}
            handleChange={handleChange}
            id={pergunta.id}
            resposta={resposta[pergunta.id]}
            show={index === slide}
          ></Radio>
        ))}

        {slide > 0 ? <button onClick={()=>{
          setSlide(slide-1)
        }}>Anterior</button> : null}

        <button
          onClick={() => {
            if (slide < perguntas.length - 1) {
              setSlide((atual) => {
                return atual + 1;
              });
            } else {
              evaluate();
              setSlide(slide + 1);
            }
          }}
        >
          Proxima
        </button>
      </div>
    );
  } else {
    return (
      <fieldset>
        <legend>Você acertou</legend>
        <p>
          {acertos} resposta(s) do total de {perguntas.length} perguntas
        </p>
      </fieldset>
    );
  }
};

export default App;
