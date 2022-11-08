import React, { useState, useEffect } from 'react'
import sortData from 'data/sortData'

function Sort(props) {
    const [selected, setSelected] = useState()
    const { onChangeSort, filters } = props

    const handleChangeSortCriteria = value => {
        setSelected(value)
    }

    useEffect(() => {
        onChangeSort(selected)
    }, [selected]);


    return (
        <div className="sort-container">
            <label htmlFor="sort">Sắp xếp theo:</label>
            <select name="sort" id="sort" value={filters.sort} onChange={e => handleChangeSortCriteria(e.target.value)}>
                <option value="" selected disabled hidden className="disabled">Tiêu chí...</option>
                {sortData.map((sort, index) => (
                    <option
                        value={sort.value}
                        key={index}
                    >
                        {sort.title}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Sort