import React from 'react'
import Header from './Header'
import Container from './Container'
import Scroll from './Scroll'
import Search from './Search'
import Modal from './Modal'
import { AppStateProvider } from './AppContext'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

const App = () => {
    return (
        <AppStateProvider>
            <BrowserRouter>
                <Header />
                <Search />
                <Scroll>
                    <Container />
                </Scroll>
                <Switch>
                    <Route exact path='/add' component={Modal}/>
                    <Route exact path='/edit' component={Modal}/>
                </Switch>
            </BrowserRouter>
        </AppStateProvider>
    )
}

export default App