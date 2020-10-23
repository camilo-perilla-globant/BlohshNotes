import React from 'react'
import { useAppState } from './AppContext'
const Search = () => {
    const [state, dispatch] = useAppState()

    const handleInputChange = e => {
        dispatch({
            type: 'set-search_field',
            payload: e.target.value
        })
    }
    return (
        <div className='search'>
            <div className="search__field">
                <form>
                    <input
                    onChange={handleInputChange}
                    type="text"
                    placeholder='Search Notes'/>
                </form>
            </div>

            <div className='search__category'>
                Category
            </div>
            
            <div className='search__importance'>
                Importance
            </div>
        </div>
    )
}

export default Search
