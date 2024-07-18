import React from 'react'

const FilterBar = ({title, option}) => {
    return (
        <div className='filter-bar'>
            <p>{title}</p>
            <select>
                <option>{option}</option>
            </select>
        </div>
    )
}

export default FilterBar