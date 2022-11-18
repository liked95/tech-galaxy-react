// import React, { useState } from 'react';
// import { Range } from 'react-range';
// import { formatMoney } from 'utils/index';




// function FilterByPriceRange(props) {
//     const { onChangeMaxPrice, filters } = props



//     const [maxPrice, setMaxPrice] = useState([50000000])

//     const handleChangeMaxPrice = price => {
//         setMaxPrice([price])
//         onChangeMaxPrice(maxPrice)
//     }

//     // console.log(filters);
//     return (
//         <>
//             <h4 className="filter-title">
//                 giá
//             </h4>

//             <Range
//                 className="price-range"
//                 step={500000}
//                 min={0}
//                 max={50000000}
//                 values={[+filters.maxPrice]}
//                 onChange={price => handleChangeMaxPrice(price)}
//                 renderTrack={({ props, children }) => (
//                     <div
//                         {...props}
//                         style={{
//                             ...props.style,
//                             height: '6px',
//                             width: '95%',
//                             backgroundColor: '#ccc'
//                         }}
//                     >
//                         {children}
//                     </div>
//                 )}
//                 renderThumb={({ props }) => (
//                     <div
//                         {...props}
//                         style={{
//                             ...props.style,
//                             height: '22px',
//                             width: '22px',
//                             borderRadius: '100%',
//                             backgroundColor: 'blue'
//                         }}
//                     />
//                 )}
//             />

//             <p className='price-range-indicator'>0-{formatMoney(+filters.maxPrice)}</p>
//         </>
//     );

// }

// export default FilterByPriceRange

import React, { useState, useEffect, useRef } from 'react';
import { Range } from 'react-range';
import { formatMoney } from 'utils/index';
import Slider from '@mui/material/Slider';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


function FilterByPriceRange(props) {
    const sliderRef = useRef(null)
    const { onChangeMaxPrice, filters } = props

    const [value, setValue] = useState(+filters.maxPrice);

    // console.log(filters, value);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeCommitted = (event, newValue) => {
        console.log(newValue)
        onChangeMaxPrice(newValue)
    }

    useEffect(() => {
        setValue(+filters.maxPrice)
    }, [filters])


    // console.log(filters);
    return (
        <>
            <Slider aria-label="Volume"
                ref={sliderRef}
                min={10}
                max={50000000}
                value={value || 50000000}
                onChange={handleChange}
                onChangeCommitted={handleChangeCommitted}
                style={{ width: '93%' }}
            />


            <p className='price-range-indicator'>

                <AttachMoneyIcon sx={{ fontSize: 20 }} />:
                0-{formatMoney(value)}</p>
        </>
    );

}

export default FilterByPriceRange