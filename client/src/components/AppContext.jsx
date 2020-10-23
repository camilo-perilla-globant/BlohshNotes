import React, { useReducer, createContext, useContext } from 'react'

const AppContext = createContext()

export const useAppState = () => useContext(AppContext)

const appStateReducer = (state, action) => {
    switch(action.type) {
        case 'set-notes':
            return {
                ...state,
                notes: action.payload
            }

        case 'set-categories':
            return {
                ...state,
                categories: state.notes.map(note => note.category)
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
    notes: [],
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


