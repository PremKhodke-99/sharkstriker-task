import React from 'react'
import FilterBar from './FilterBar'

const SearchAndFilter = () => {
    return (
        <div className='search-and-filter'>
            <div className='search-bar'>
                <div className='search'>
                    <h5>Search:</h5>
                    <div>
                        <input type="text" />
                        <img src="search.png" alt="search" />
                    </div>
                </div>
            </div>
            <div className='filter'>
                <FilterBar title={'saved Queries'} option={'None'}/>
                <button>
                    <img src="edit.png" alt="edit" />
                </button>
                <FilterBar title={'sensor'} option={'All Sensor'}/>
                <FilterBar title={'time type'} option={'Relative'}/>
                <FilterBar title={'time interval'} option={'last 5 hours'}/>
                <FilterBar title={'auto refresh(min)'} option={'None'}/>
                <button>
                    <strong>...</strong>
                </button>
            </div>
        </div>
    )
}

export default SearchAndFilter