import React from 'react'

const Search = () => {
    return (
        <div className='search'>
            <div className="search__field">
                <form>
                    <input type="text" placeholder='Search Notes'/>
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
