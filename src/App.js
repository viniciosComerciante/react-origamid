import React from "react";

const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    console.log(target, target.checked)
    if(target.checked){
      setCores([...cores, target.value])
    }else{
      setCores(cores.filter(cor => cor !== target.value))
    }

    
  }

  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vemelho', 'cinza'];

  console.log(cores);

  return (
    <form action="">
      
      {coresArray.map(cor=>{
        return (
          <label key={cor} style={{textTransform: 'capitalize'}}>
            <input type="checkbox" value={cor} checked={cores.includes(cor)} onChange={handleChange}/>
            {cor}
          </label>
        )
      })}
    </form>
  );
};

export default App;
