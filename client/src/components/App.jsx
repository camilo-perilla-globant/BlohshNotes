import React from 'react'
import Header from './Header'
import Container from './Container'
import Scroll from './Scroll'
import Search from './Search'
import Modal from './Modal'

const App = () => {
    return (
        <>
            <Modal />
            <Header />
            <Search />
            <Scroll>
                <Container />
            </Scroll>
        </>
    )
}

export default App