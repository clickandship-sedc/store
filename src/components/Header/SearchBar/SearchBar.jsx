import React, { useState, useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import SearchItem from "./SearchItem"
import ViewAll from "./ViewAll"

import { CSSTransition } from "react-transition-group"

import {
    CatDP,
    SubCatDP,
    ViewAllSub,
} from "../CatDropDown/CatDP"
import { toggleCatDropDown } from "../../../store/slices/dropdowns/catDropDownSlice"
import { setShouldFocus } from "../../../store/slices/search/search"

import { NavLink, useNavigate } from "react-router-dom"
import { getSearch } from "../../../helpers/API/searchApi"
import { useQuery } from "@tanstack/react-query"
import { getCategories } from "../../../helpers/API/category-api"
import { useSearchProduct } from "../../../helpers/UserHelper/UserHelper"

function SearchBar() {
    const navigate = useNavigate()
    const searchProduct = useSearchProduct()
    const [searchValue, setSearchValue] = useState("")
    const [showLoading, setShowLoading] = useState(false)
    const [isInputFocused, setIsInputFocused] = useState(false)
    const [currentCategory, setCurrentCategory] = useState(null)

    const dispatch = useDispatch()
    const csstransitionRef = useRef()
    const searchFormRef = useRef()
    const catref = useRef()
    const searchref = useRef()

    const isMobile = useSelector((state) => state.mobile.isMobile)
    const showCatDropDown = useSelector(
        (state) => state.catDropDown.showDropDown
    )
    const shouldFocus = useSelector((state) => state.search.shouldFocus)

    const {
        data: searchData,
        error: searchError,
        isError: isSearchError,
        isPending: isSearchPending,
        isSuccess: searchSuccess,
    } = useQuery({
        queryKey: ["searchQuery", searchValue],
        queryFn: () => getSearch(searchValue),
        enabled: !!searchValue,
    })
    const {
        data: allCatData,
    } = useQuery({
        queryKey: ["allCategories"],
        queryFn: () => getCategories(),
    })

    useEffect(() => {
        if (allCatData && currentCategory === null) {
            setCurrentCategory(allCatData[0])
        }
    }, [allCatData, currentCategory])

    useEffect(() => {
        if (isMobile && shouldFocus && searchref.current) {
            searchref.current.focus()
            dispatch(setShouldFocus(false))
        }
        if ((searchSuccess && searchData && !isSearchPending) || searchValue?.length < 1) setShowLoading(false)
    }, [shouldFocus, dispatch, isSearchError, searchError, searchSuccess, isMobile, isSearchPending, searchData, searchValue])

    const handleClearClick = () => {
        setSearchValue("")
        if (searchref) searchref.current.value = ""
    }

    const handleSearchClick = () => {
        if (searchData?.length > 0 && searchValue?.length > 0) {
            navigate(`/store/search/${searchValue}`)
            setIsInputFocused(false)
        }
    }

    const handleCategoriesClick = () => {
        dispatch(toggleCatDropDown())
    }

    const handleInputChange = (event) => {
        const inputValue = event.target.value

        clearTimeout(handleInputChange.timeoutId)
        setShowLoading(true)
        handleInputChange.timeoutId = setTimeout(() => {
            setSearchValue(inputValue)
        }, 500)
    }

    const handleFocus = () => {
        setIsInputFocused(true)
    }

    const handleCatClick = (e) => {
        setCurrentCategory(allCatData.find(cat => cat.id === e))
    }

    const handleSubCatClick = (e) => {
        dispatch(toggleCatDropDown())
        navigate(`/store/subcategory/${e}`)
    }

    const handleViewAllClick = (e) => {
        dispatch(toggleCatDropDown())
        navigate(`/store/category/${e}`)
    }

    const handleClickSuggestion = (e) => {
        navigate(`/store/productDetails/${e}`)
        searchProduct(e)
        setIsInputFocused(false)
    }

    const handleClickViewAll = () => {
        navigate(`/store/search/${searchValue}`)
        setIsInputFocused(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchFormRef.current && !searchFormRef.current.contains(event.target)) {
                setIsInputFocused(false)
            }
        }

        document.body.addEventListener('click', handleClickOutside)

        return () => {
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, [dispatch])

    return (
        <div className="search-form" ref={searchFormRef}>
            <div className="search-bar-container">
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                    }}
                >
                    <div className="inputPDiv">
                        <input
                            className="search-bar"
                            name="search-bar"
                            type="search"
                            placeholder="Search for products"
                            onChange={(e) => handleInputChange(e)}
                            ref={searchref}
                            onFocus={handleFocus}
                        ></input>
                        {showLoading && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><defs><filter id="svgSpinnersGooeyBalls20"><feGaussianBlur in="SourceGraphic" result="y" stdDeviation="1" /><feColorMatrix in="y" result="z" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7" /><feBlend in="SourceGraphic" in2="z" /></filter></defs><g filter="url(#svgSpinnersGooeyBalls20)"><circle cx="5" cy="12" r="4" fill="var(--secAccent)"><animate attributeName="cx" calcMode="spline" dur="2s" keySplines=".36,.62,.43,.99;.79,0,.58,.57" repeatCount="indefinite" values="5;8;5" /></circle><circle cx="19" cy="12" r="4" fill="var(--accent)"><animate attributeName="cx" calcMode="spline" dur="2s" keySplines=".36,.62,.43,.99;.79,0,.58,.57" repeatCount="indefinite" values="19;16;19" /></circle><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></g></svg>
                        )}
                    </div>
                </form>
                <button
                    className="searchButtons"
                    id="clearButton"
                    onClick={handleClearClick}
                    disabled={searchValue?.length < 1}
                >
                    <svg viewBox="0 0 32 32">
                        <path
                            fill="currentColor"
                            d="M17.414 16L26 7.414L24.586 6L16 14.586L7.414 6L6 7.414L14.586 16L6 24.586L7.414 26L16 17.414L24.586 26L26 24.586L17.414 16z"
                        />
                    </svg>
                </button>
                <button
                    className="searchButtons"
                    id="searchButton"
                    onClick={handleSearchClick}
                    disabled={!searchData && searchValue?.length <= 0}
                >
                    <svg viewBox="0 0 32 32">
                        <path
                            fill="currentColor"
                            d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"
                        />
                    </svg>
                </button>
                <div className="divider"></div>
                <button disabled={!allCatData} className="categoriesButton" onClick={handleCategoriesClick}>
                    <svg viewBox="0 0 32 32">
                        <path
                            fill="currentColor"
                            d="M12 4H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 8H6V6h6zm14-8h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 8h-6V6h6zm-14 6H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 8H6v-6h6zm14-8h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 8h-6v-6h6z"
                        />
                    </svg>
                </button>
            </div>

            {!isMobile && <div className="frequent-searches">
                <h3>Frequent Searches</h3>
                <ul>
                    <li>
                        <NavLink to={`/store/search/iphone`}>iphone</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/store/search/denim`}>denim</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/store/search/samsung`}>samsung</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/store/search/apple`}>apple</NavLink>
                    </li>
                </ul>
            </div>}

            <CSSTransition
                in={showCatDropDown && !isMobile}
                timeout={200}
                classNames="categories-dp"
                unmountOnExit
                nodeRef={catref}
            >
                <div className="categories-dp" ref={catref}>
                    <ul className="catsList">
                        {allCatData?.map((e) => (
                            <CatDP key={e.id} category={e} currentCategory={currentCategory} handleCatClick={handleCatClick} />
                        ))}
                    </ul>
                    <div className="divider"></div>
                    <div className="subCatsList">
                        <ul>
                            {currentCategory?.subcategories?.slice(0, 5).map((e) => (
                                <SubCatDP key={e.id} subcategory={e} handleSubCatClick={handleSubCatClick} />
                            ))}
                        </ul>
                        <ViewAllSub category={currentCategory} handleViewAllClick={handleViewAllClick}></ViewAllSub>
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition
                in={isInputFocused && searchData?.length > 0 && searchSuccess}
                timeout={100}
                classNames="suggestions"
                unmountOnExit
                nodeRef={csstransitionRef}
            >
                <div className="suggestions" ref={csstransitionRef}>
                    <ul className="suggestions-items">
                        {searchData?.slice(0, 6).map((item) => (
                            <SearchItem key={item.id} item={item} handleClick={handleClickSuggestion} />
                        ))}
                        {searchData?.length > 6 && (
                            <ViewAll key="viewAll" amount={searchData?.length - 6} handleClick={handleClickViewAll} />
                        )}
                    </ul>
                </div>
            </CSSTransition>
        </div>
    )
}

export default SearchBar
