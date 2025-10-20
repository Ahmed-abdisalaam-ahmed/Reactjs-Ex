import React,{useState} from 'react'

export const useForm = (initialState) => {

    const[values,setValues,] = useState(initialState);

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setValues({
            ...values,
            [name] : value
        })
    }
    const resetFrom = ()=>{
        setValues(initialState);
    }
    return { handleChange , resetFrom , values}
}