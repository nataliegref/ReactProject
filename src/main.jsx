import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Hello from './Greeting.jsx'
import TestList from './HTMLCode.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hello name={'you'}/>
    <TestList />
    </React.StrictMode>,

)
 