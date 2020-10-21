import React from 'react'
import Header from './Header'
import NoteContainer from './NoteContainer'
import Scroll from './Scroll'
import Search from './Search'

const App = () => {
    return (
        <>
            <Header />
            <Search />
            <Scroll>
                <NoteContainer />
            </Scroll>
        </>
    )
}

export default App