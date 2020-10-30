import React from 'react'
import { useAppState } from './AppContext'
const Search = () => {
    const [state, dispatch] = useAppState()

    const handleInputChange = e => {
        const target = e.target.name
        dispatch({
            type: `set-${target}`,
            payload: e.target.value
        })
    }

    return (
        <div className='search'>
            <div className="search__field search__field--term">
                <form>
                    <input
                    name='search_term'
                    onChange={handleInputChange}
                    type="text"
                    placeholder='Search Notes'/>
                </form>
            </div>

            <div className='search__field search__field--category'>
                <span>Category:</span>
                <select
                name='category'
                onChange={handleInputChange}>
                    <option value="" defaultValue>All</option>
                    {state.categories
                    .filter((c, i) => state.categories.indexOf(c) === i)
                    .map((c, i) => (
                        <option value={c} key={i}>
                            {c}
                        </option>
                    ))}
                </select>
            </div>
            
            <div className='search__field search__field--query'>
                <span>Search by:</span>
                <select
                name='query'
                onChange={handleInputChange}>
                    <option value="title">Title</option>
                    <option value="content">Content</option>
                </select>
            </div>
        </div>
    )
}

export default Search
