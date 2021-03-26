import React from 'react'
import Input from './Form/Input';
import useForm from './Hooks/useForm';

const App = () => {

  const cep = useForm('cep')
  const email = useForm('email')
  const nome = useForm('nome')


  function handleSubmit(e){
    e.preventDefault();
    if(cep.validate() && email.validate() && nome.validate()){
      console.log('enviou')
    }else{
      console.log('não enviar')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" label="cep" id="cep" placeholder="00000-000" {...cep}></Input>

      <Input type="email" label="email" id="email" placeholder="joaozinho@gmail.com" {...email}></Input>

      <Input type="text" label="nome" id="nome" {...nome}></Input>
      <button>Enviar</button>

    </form>
  )
}

export default App
