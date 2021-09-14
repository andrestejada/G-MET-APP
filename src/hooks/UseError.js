import {useState} from 'react'

const UseError = (time=5000) => {
    const [error, setError] = useState(false);

    setTimeout(() => {
        setError(false)
    }, time);

    return [error ,setError] 
}

export default UseError
