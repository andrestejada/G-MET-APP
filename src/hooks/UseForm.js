import { useState } from 'react';


export const UseForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = (e) => {
        //reiniciar unidad de medida cada vez que la maginitud cambia
        if(e.target.name === 'magnitud'){
            setValues({
              ...values,
              [e.target.name]: e.target.value,
              unidadDeMedida:''
            });
            return
          }

        setValues({
            ...values,
            [ e.target.name ]: e.target.value
        });
       
    }

    

    return [ values, handleInputChange, reset ];

}