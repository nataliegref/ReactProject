import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hello from './Greeting.jsx'
import ShowList from './List.jsx'
import ButtonApp from './Button.jsx'
import ColorApp from './Color.jsx'
import Person from './Person.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hello />
    <ShowList />
    <ColorApp />
    </React.StrictMode>,

)

 