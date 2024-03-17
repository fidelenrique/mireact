import { useState } from "react"


function App() {

    const [count, setCount] = useState(0)
    // exemple 01 
 //   console.log('render')

    const increment = () => {
//        setCount(count + 1)
//        setCount(count + 1)
//        setCount(count + 1)
        setCount((c) => c + 1)
        setCount((c) => c + 1)
        setCount((c) => c + 1)
    }

    // exemple 02
    const [person, setPerson] = useState({
        firstname: 'John',
        lastname: 'Doe',
        age: 18
    })

    const incrementAge = () => {
        //person.age++
        setPerson({...person, age: person.age + 1} )
    }

    return <>
        <p>Compteur : {count}</p>
        <button onClick={increment}>Incrémenter</button>
        
        <p>Age de {person.firstname} : {person.age}</p>
        <button onClick={incrementAge}>Gagner une année</button>
    </>
}


export default App
