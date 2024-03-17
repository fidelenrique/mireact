import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const title = "Hola a todos"
const style = {color: 'white', backgroundColor: 'GrayText'}
const showTitle = true
const todos = [
  'Présenter react',
  'Présenter le JSX',
  'Créer des composants'
]


function App() {

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    alert("J'ai cliqué sur le titre")
  }

  return <Fragment>
    {
      showTitle ? 
      <h1 onClick={handleClick} id='title' className='title' style={style}>{title}</h1>
      : 
      <p>Demo</p>
    }

    <Paragraphe color="purple" children={"Premier parragraphe"} hidden={false} id={"monid"} className={"maclass"} />
    <input autoFocus/>
    <div style={{width: 50, height: 50, backgroundColor: 'blue'}}/>
    <Paragraphe color="purple" children={"Seconde parragraphe"} hidden={false}/>
    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
  </Fragment> 
}

function Paragraphe ({color, children, hidden, ...props}) {
  if (hidden) {
    return null
  }

  //const props = {
  //  id: 'monid',
  //  className: 'maclass',
  //}

  return <div style={{color: color}} {...props} >{children}</div>
}

export default App
