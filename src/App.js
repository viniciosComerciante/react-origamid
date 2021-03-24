import React from 'react'
import useFetch from './useFetch';
import useLocalStorage from './useLocalStorage';

const App = () => {

  const [produto, setProduto] = useLocalStorage('produto', 'notebook');
  const {request, data, loading, error} = useFetch();

 

  React.useEffect(()=>{
    async function fetchData(){
      const {response, json} = await request('https://jsonplaceholder.typicode.com/comments')
      console.log(json);
    }

    fetchData();
    
  }, [request])

  if(error) return <p>{error}</p>
 
  if(loading) return <p>Carregando...</p>

  if(data){
    return (
      <div>
        {data.map((comentario)=>{
          return(
            <h1 key={comentario.id}>{comentario.name}</h1>
          )
        })}
      </div>
    )
  }else{
    return null;
  }
  
}

export default App
