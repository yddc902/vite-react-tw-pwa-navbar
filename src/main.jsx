import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { registerSW } from 'virtual:pwa-register'


const updateSW = registerSW({
  onNeedRefresh() {
    // show a prompt to user
  },
  onOfflineReady() {
    // show a ready to work offline to user
  },
})
// updateSW()
ReactDOM.render(
  <React.StrictMode>
    <>
    <button onClick={()=>updateSW()}>Install</button>
      <App />
    </>
  </React.StrictMode>,
  document.getElementById('root')
)
