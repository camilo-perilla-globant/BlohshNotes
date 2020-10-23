import React, { useReducer, createContext, useContext } from 'react'

const AppContext = createContext()

export const useAppState = () => useContext(AppContext)

const appStateReducer = (state, action) => {
    switch(action.type) {
        case 'set-amount':
            return {
                ...state,
                notesAmount: action.payload
            }

        case 'set-search_field':
            return {
                ...state,
                searchField: action.payload
            }
        default:
            return state
    }
}

const initialState = {
    categories: [],
    notesAmount: 0,
    listOfNotes: [],
    searchField: ''

}

export const AppStateProvider = ({ children }) => {
    let billie = useReducer(appStateReducer, initialState)
    return (
        <AppContext.Provider value={billie}>
            {children}
        </AppContext.Provider>
    )
}


