import React, { useState, useEffect } from 'react';

function App() {

    const [showInput, setShowInput] = useState(true)

    return <div className='container mb-3 stack'>
        {/* <Checkbox 
            checked={showInput}
            onChange={setShowInput}
            id="titleshow"
            label="Afficher le champs titre"
        />
        {showInput && <EditFils />}
        <div style={{height: '300vh'}}></div> */}
        <EditFils />
        <EditCount />
    </div>
}

function EditFils () {
  const [title, setTitle] = useState('')
  const [firstname, setFirstname] = useState('')

  // Ce useEffect se déclenchera à chaque fois que la valeur de count changera
  useEffect(() => {
    document.title = title
  }, [title]); // Le tableau de dépendances indique que ce useEffect dépend de la valeur de count

  return (
    <div className='vstack gap-2'>
        <input 
            placeholder='Modifier le titre'
            value={title}
            onChange={setTitle}
        />
        <input 
            placeholder='Prénom'
            value={firstname}
            onChange={setFirstname}
        />
    </div>
  );
}

function EditCount () {
  const [count, setCount] = useState(0)

      // Ce useEffect se déclenchera à chaque fois que la valeur de count changera
  useEffect(() => {
    // Met à jour le titre du document en fonction du compteur
    document.label = 'Vous avez cliqué ${count} fois'

  }, [count]); // Le tableau de dépendances indique que ce useEffect dépend de la valeur de count

  return (
    <div className='container mb-3'>
        <div className='vstack gap-2'>
            <p>Vous avez cliqué {count} fois</p>
            <button type='button' className='btn btn-primary' onClick={() => setCount(count + 1)}>
                Cliquez ici
            </button>
        </div>
    </div>
  )
}

export default App;