import { useState } from "react"


function App() {

    const [value, setValue] = useState('')
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const [checked, setChecked] = useState(true)
    const toggleCheck = () => {
        setChecked(!checked)
    }

    return <form>
        <textarea value={value} onChange={handleChange}/>
        <br/>
        <input type="checkbox" checked={checked} onChange={toggleCheck} />
        <br/>
        {/* {checked && <button>Envoyer</button>} */}
        {/* ou */}
        <button disabled={!checked}>Envoyer</button>

    </form>
}

export default App