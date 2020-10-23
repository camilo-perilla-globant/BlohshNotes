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
        case 'set-category':
            return {
                ...state,
                currentCategory: action.payload
            }


        case 'set-search_field':
            return {
                ...state,
                searchField: action.payload
            }
        case 'set-field':
            return {
                ...state,
                field: action.payload
            }
        default:
            return state
    }
}

const initialState = {
    categories: [],
    currentCategory: '',
    notes: [],
    searchField: '',
    field: 'title'

}

export const AppStateProvider = ({ children }) => {
    let billie = useReducer(appStateReducer, initialState)
    return (
        <AppContext.Provider value={billie}>
            {children}
        </AppContext.Provider>
    )
}


