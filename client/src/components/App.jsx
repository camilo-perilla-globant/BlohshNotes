import React from 'react'
import Header from './Header'
import Container from './Container'
import Scroll from './Scroll'
import Search from './Search'
import Modal from './Modal'
import Delete from './Delete'
import { AppStateProvider } from './AppContext'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Notes from './Notes'

const App = () => {
    const user = localStorage.getItem('user') || false
    return (
        <AppStateProvider>
            <BrowserRouter>
                <Header />
                <Search />
                
                <Switch>
                    <Route exact path='/add'
                    component={user ? Modal : Login}/>
                    <Route exact path='/edit'
                    component={user ? Modal : Login}/>
                    
                    <Route exact path='/delete' component={Delete}/>
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/' component={Notes}/>
                </Switch>
            </BrowserRouter>
        </AppStateProvider>
    )
}

export default App