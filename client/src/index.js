import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './assets/styles/style.scss'
import { AppStateProvider } from './components/AppContext'



ReactDOM.render(
    <AppStateProvider>
        <App />
    </AppStateProvider>,
    document.getElementById('root'))


