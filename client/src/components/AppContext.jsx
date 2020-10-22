import React, { useReducer, createContext, useContext } from 'react'

const AppContext = createContext()

export const useAppState = () => useContext(AppContext)

const appStateReducer = (state, action) => {
    switch(action.type) {
        case 'close-modal':
            return {
                ...state,
                showModal: false
            }

        case 'open-modal':
            return {
                ...state,
                showModal: true
            }
        default:
            return state
    }
}

const initialState = {
    showModal: false,

}

export const AppStateProvider = ({ children }) => {
    let billie = useReducer(appStateReducer, initialState)
    return (
        <AppContext.Provider value={billie}>
            {children}
        </AppContext.Provider>
    )
}


