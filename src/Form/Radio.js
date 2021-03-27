// import React from "react";

// const Radio = ({ pergunta, options, onChange, value }) => {
//   return (
//     <fieldset style={{padding: '2rem', marginBottom:'1rem', border:'2px solid #eee'}}>
//       <legend>
//         <h2>{pergunta}</h2>
//       </legend>
//       {options.map((option) => (
//         <label
//           htmlFor=""
//           key={option}
//           style={{ marginBotton: "1rem", fontFamily: "monospace" }}
//         >
//           <input type="radio" checked={ value=== option} value={option} onChange={onChange}/>
//           {option}
//         </label>
//       ))}
//       <button>Proximo</button>
//     </fieldset>
//   );
// };

// export default Radio;


import React from 'react'

const Radio = (props) => {

    if(props.show){
        return (
            <fieldset>
                
                <legend style={{fontWeight:"bold"}}>{props.title} {props.show? 'sim': 'nao'}</legend>
                {props.options.map(option=>(
                    <label htmlFor="" key={option}>
                        <input type="radio" id={props.id} onChange={props.handleChange} value={option} checked={option === props.resposta}/>
                        {option}
                    </label>
                ))}
            </fieldset>
        )
    }else{
        return null;
    }

    
}

export default Radio
