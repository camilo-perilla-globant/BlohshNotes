import React from 'react'
import Header from './Header'
import Container from './Container'
import Scroll from './Scroll'
import Search from './Search'
import Modal from './Modal'
import Delete from './Delete'
import { AppStateProvider } from './AppContext'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

const App = () => {
    return (
        <AppStateProvider>
            <BrowserRouter>
                <Header />
                <Search />
                
                <Switch>
                    <Route exact path='/add' component={Modal}/>
                    <Route exact path='/delete' component={Delete}/>
                    <Route exact path='/edit' component={Modal}/>
                    <Route exact path='/' render={() => (
                        <Scroll>
                            <Container />
                        </Scroll>)
                    }/>
                </Switch>
            </BrowserRouter>
        </AppStateProvider>
    )
}

export default App