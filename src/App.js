import React from 'react'
import Input from './Form/Input';

const App = () => {

  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  function validateCep(value){
    if(value.length === 0){
      setError('Preencha um valor')
      return false;
    }else if(/^\d{5}-?\d{3}$/.test(value)){
      setError(null)
      return true;
    }else{
      setError('preencha o campo corretamente')
      return false
    }
  }

  function handleBlur({target}){
    validateCep(target.value);
  }

  function handleChange({target}){
    if(error){
      validateCep(target.value)
    }
    setCep(target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    if(validateCep(cep)){
      console.log('enviou')
    }else{
      console.log('não enviar')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" label="cep" id="cep" placeholder="00000-000" value={cep} onChange={handleChange} onBlur={handleBlur}></Input>
      <p style={{color: 'red'}}>{error}</p>
      <button>Enviar</button>
    </form>
  )
}

export default App
