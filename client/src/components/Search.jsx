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
            <div className="search__field">
                <form>
                    <input
                    name='search_field'
                    onChange={handleInputChange}
                    type="text"
                    placeholder='Search Notes'/>
                </form>
            </div>

            <div className='search__category'>
                Category:
                <select
                name='category'
                onChange={handleInputChange}>
                    <option value="" defaultValue>All</option>
                    {state.categories.map((c, i) => (
                        <option value={c} key={i}>
                            {c}
                        </option>
                    ))}
                </select>
            </div>
            
            <div className='search__importance'>
                Search by:
                <select
                name='field'
                onChange={handleInputChange}>
                    <option value="title">Title</option>
                    <option value="content">Content</option>
                </select>
            </div>
        </div>
    )
}

export default Search
