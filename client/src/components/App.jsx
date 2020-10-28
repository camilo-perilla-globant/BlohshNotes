import React from 'react'
import Header from './Header'
import Search from './Search'
import Modal from './Modal'
import Delete from './Delete'
import { AppStateProvider } from './AppContext'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Notes from './Notes'
import Home from './Home'
import { useAppState } from './AppContext'

const App = () => {
    const [state, dispatch] = useAppState()
    const user = state.user || false
    return (
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
                <Route exact path='/' component={user ? Notes : Home}/>
            </Switch>
        </BrowserRouter>   
    )
}

export default App