import React from 'react'
import Input from './Form/Input'
import Radio from './Form/Radio';
import Select from './Form/Select';

const App = () => {

  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('vermelho');
  const [fruta, setFruta] = React.useState('');

  return (
    <form >

      <h2>Cores</h2>
      <Radio options={['azul', 'vermelho']} value ={cor} setValue={setCor}></Radio>
      <h2>Frutas</h2>
      <Radio options={['laranja', 'maçã', 'limao']} value ={fruta} setValue={setFruta}></Radio>
      <Select options={['smartphone', 'tablet']} value={produto} setValue={setProduto}></Select>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required></Input>
      <Input id="email" label="Email" value={email} setValue={setEmail} required></Input>
      <button>Enviar</button>
    </form>
  )
}

export default App
