import React, { useState } from 'react'
import magnifyingGlass from "../../assets/images/header/magnifying-glass.svg";
import cancel from "../../assets/images/header/cancel.svg";
import anya from "../../assets/images/contingency-images/anya-shock.gif"

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useRef } from 'react';


function Search() {
    const [input, setInput] = useState("")
    const [focused, setFocused] = useState(false)
    const searchResultRef = useRef(null)

    const onFocus = () => setFocused(true)

    const onBlur = (e) => {
        // console.log(searchResultRef.current, e.relatedTarget)
        // Neu search-result div khong contain element dc focus sau khi search-input bi blur thi setFocus to false
        if (!searchResultRef.current.contains(e.relatedTarget)) {
            setFocused(false)
        }
    }


    const handleChangeSearchInput = (e) => {
        setInput(e.target.value)
    }

    const resetSearch = () => {
        setInput("")
    }

    const products = useSelector(state => state.productList.products)

    const renderedSearchProducts = products.filter(product => product.name.toLowerCase().includes(input.toLowerCase()))
    // console.log(renderedSearchProducts);

    return (
        <div className="search-input">

            <input type="text" placeholder="Tìm kiếm"
                value={input}
                onChange={e => handleChangeSearchInput(e)}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <div className="glass-img">
                <img
                    src={magnifyingGlass}
                    alt="magnify-glass"
                    className="magnify-glass filter-gray"
                />
                <img
                    src={cancel}
                    alt="cancel"
                    className="cancel-search-icon filter-gray"
                />
            </div>
            <div id="search-result" ref={searchResultRef}>
                {focused && input && renderedSearchProducts.length > 0 && renderedSearchProducts.map((product, index) => (
                    <Link
                        to={`detail?id=${product.id}`}
                        className="search-item"
                        key={index}
                        onClick={resetSearch}
                    >
                        <p>{product.name}</p>
                    </Link>
                ))}

                {focused && input && renderedSearchProducts.length == 0 && (
                    <>
                        <p className="search-not-found">Không tìm thấy sản phẩm nào</p>
                        <span className="emoji">
                            <img src={anya} />
                        </span>
                    </>
                )}
            </div>
        </div>
    )
}

export default Search