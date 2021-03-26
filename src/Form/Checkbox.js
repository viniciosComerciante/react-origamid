import React from 'react'

const Checkbox = ({options, value, setValue}) => {
    
    function handleChange({target}){
        if(target.checked){
            setValue([...value, target.value])
        }else{
            setValue(value.filter((itemValue) => itemValue !== target.value))
        }
    }

    console.log(value)
   

    return (
        <div>
            {options.map((option)=>(
                <label htmlFor="" key={option}>
                    <input type="checkbox" value ={option} onChange={handleChange}/>
                    {option}
                </label>
            ))}
            
        </div>
    )
}

export default Checkbox
