import React, { useState, useRef, useEffect } from 'react'
import magnifyingGlass from "../../assets/images/header/magnifying-glass.svg";
import cancel from "../../assets/images/header/cancel.svg";
import anya from "../../assets/images/contingency-images/anya-shock.gif"

import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';




function Search() {
    const navigate = useNavigate()
    const [input, setInput] = useState("")
    const [focused, setFocused] = useState(false)

    const onFocus = () => setFocused(true)

    // const onBlur = (e) => setFocused(false)



    const handleChangeSearchInput = (e) => {
        setInput(e.target.value)
    }

    const handleClickSearchItem = () => {
        setInput("")
    }

    const handleCancelSearch = () => {
        setInput("")
        setFocused(false)
        inputRef.current.blur()
    }

    const onKeyDown = (e) => {
        // tab
        if (e.keyCode == 9) {
            setFocused(false)
        }

        // esc
        if (e.keyCode == 27) {
            handleCancelSearch()
        }
        // enter
        if (e.keyCode == 13) {
            if (renderedSearchProducts.length == 0) {
                // setFocused(false)
                // inputRef.current.blur()
                return
            }
            const firstProduct = renderedSearchProducts[0]
            navigate(`detail?id=${firstProduct.id}`)
            setFocused(false)
            setInput("")
            inputRef.current.blur()
        }
    }

    // handle Click outside
    const inputRef = useRef(null)
    const searchResultRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!inputRef.current.contains(e.target) && !searchResultRef.current.contains(e.target)) {
                setFocused(false)
            }
        }

        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])


    const products = useSelector(state => state.productList.products)

    const renderedSearchProducts = products.filter(product => product.name.toLowerCase().includes(input.toLowerCase()))
    // console.log(renderedSearchProducts);

    return (
        <div className="search-input">

            <input type="text" placeholder="Tìm kiếm"
                ref={inputRef}
                value={input}
                onChange={e => handleChangeSearchInput(e)}
                onFocus={onFocus}
                onKeyDown={onKeyDown}
            // onBlur={onBlur}
            />
            <div className="glass-img">
                {!input && <img
                    src={magnifyingGlass}
                    alt="magnify-glass"
                    className="magnify-glass filter-gray"
                />}
                {input && <img
                    src={cancel}
                    alt="cancel"
                    className="cancel-search-icon filter-gray"
                    onClick={handleCancelSearch}
                />}
            </div>
            <div id="search-result" ref={searchResultRef}>
                {focused && input && renderedSearchProducts.length > 0 && renderedSearchProducts.map((product, index) => (
                    <Link
                        to={`detail?id=${product.id}`}
                        className="search-item"
                        key={index}
                        onClick={handleClickSearchItem}

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