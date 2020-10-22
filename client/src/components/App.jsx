import React from 'react'
import Header from './Header'
import Container from './Container'
import Scroll from './Scroll'
import Search from './Search'
import Modal from './Modal'
import { AppStateProvider } from './AppContext'

const App = () => {
    return (
        <AppStateProvider>
            <Header />
            <Search />
            <Scroll>
                <Container />
            </Scroll>
            <Modal />
        </AppStateProvider>
    )
}

export default App