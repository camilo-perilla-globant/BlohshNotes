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


        case 'set-search_term':
            return {
                ...state,
                searchTerm: action.payload
            }
        case 'set-query':
            return {
                ...state,
                query: action.payload
            }
        case 'set-user':
            return {
                ...state,
                user: action.payload
            }

        case 'edit-note':
            return {
                ...state,
                notes: state.notes.map(note => {
                    if (note._id === action.payload.id) {
                        const newNote = {...note, ...action.payload.newInfo}
                        return newNote
                    }
                    return note
                })
            }
        default:
            return state
    }
}

const initialState = {
    categories: [],
    currentCategory: '',
    notes: [],
    searchTerm: '',
    query: 'title',
    user: JSON.parse(localStorage.getItem('user')) || undefined

}

export const AppStateProvider = ({ children }) => {
    let billie = useReducer(appStateReducer, initialState)
    return (
        <AppContext.Provider value={billie}>
            {children}
        </AppContext.Provider>
    )
}


