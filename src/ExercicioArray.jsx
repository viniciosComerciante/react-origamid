import React from 'react';

const produtos = [
    {
        id: 1,
        nome: 'Smartphone',
        preco: 'R$ 2000',
        cores: ['#29d8d5', '#254684', '#54848d']
    },

    {
        id:2,
        nome: 'Notebook',
        preco: 'R$ 3000',
        cores: ['#de594d', '#d4394b', '#f37c59']
    },

    {
        id: 3,
        nome: 'tablet',
        preco: 'R$ 1500',
        cores: ['#365069', '#47c1c8', '#f95786']
    }
]



const ExercicioArray  = ()=>{



    return(
        <div>
            {produtos.map(({id, nome, preco, cores})=>{
                return (
                    <div key={nome}>
                        <h1>{nome}</h1>
                        <h2>Preco: {preco}</h2>
                        <ul>
                            {cores.map((cor)=>{
                                return <li key={cor} style={{background: `${cor}`}}>{cor}</li>
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default ExercicioArray;