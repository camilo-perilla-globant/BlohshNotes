import React from 'react'
import Header from './Header'
import Modal from './Modal'
import Delete from './Delete'
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
            <Switch>
                <Route exact path='/add'
                component={user ? Modal : Login}/>
                <Route exact path='/edit'
                component={user ? Modal : Login}/>
                <Route exact path='/delete'
                component={user ? Delete : Login}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/login' component={Login}/>
            </Switch>
            { user ? <Notes /> : <Home /> }
        </BrowserRouter>   
    )
}

export default App