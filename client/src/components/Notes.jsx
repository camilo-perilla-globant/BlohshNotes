import React from 'react'
import Scroll from './Scroll'
import Container from './Container'
import Search from './Search'

const Notes = () => {
    return (
        <>
            <Search />
            <Scroll>
                <Container />
            </Scroll>
        </>
    )
}

export default Notes
