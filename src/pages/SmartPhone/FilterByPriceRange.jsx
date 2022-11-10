import React, { useState } from 'react';
import { Range } from 'react-range';
import { formatMoney } from 'utils/index';



function FilterByPriceRange(props) {
    const [maxPrice, setMaxPrice] = useState([50000000])
    const { onChangeMaxPrice, filters } = props

    const handleChangeMaxPrice = price => {
        setMaxPrice([price])
        onChangeMaxPrice(maxPrice)
    }

    // console.log(filters);
    return (
        <>
            <h4 className="filter-title">
                giá
            </h4>

            <Range
                className="price-range"
                step={500000}
                min={0}
                max={50000000}
                values={[+filters.maxPrice]}
                onChange={price => handleChangeMaxPrice(price)}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '6px',
                            width: '95%',
                            backgroundColor: '#ccc'
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: '22px',
                            width: '22px',
                            borderRadius: '100%',
                            backgroundColor: 'blue'
                        }}
                    />
                )}
            />

            <p className='price-range-indicator'>0-{formatMoney(+filters.maxPrice)}</p>
        </>
    );

}

export default FilterByPriceRange