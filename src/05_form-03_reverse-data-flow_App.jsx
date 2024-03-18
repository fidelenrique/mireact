import { useState } from "react"

function App() {

    const [IsTermAccepted, setIsTermAccepted] = useState(false)

    return <form>
        <CGUCheckbox checked={IsTermAccepted} onCheck={setIsTermAccepted} />
        <button disabled={!IsTermAccepted}>Envoyer le formulaire</button>
    </form>
}

function CGUCheckbox ({checked, onCheck}) {
    return <div>
        <label>
            <input 
                type="checkbox"
                onChange={(e) => onCheck(e.target.checked)}
                 checked={checked} />
            Accepter les conditions d'utilisatiopn
        </label>
    </div>
}

export default App