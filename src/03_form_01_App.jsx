import { useState } from "react"


function App() {
    const [firstname, setFirstname] = useState('John doe')

    const handleChange = (e) => {
        setFirstname(e.target.value)
    }

    const reset = () => {
        setFirstname('')
    }

    console.log('render')

    return <form>
        <input type="text" name="firstname" value={firstname} onChange={handleChange}/>
        <button onClick={reset} tytpe="button">Reset</button>
    </form>
}


export default App
