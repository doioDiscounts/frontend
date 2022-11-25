import React from 'react';
import axios from 'axios'

const Context = React.createContext();

export function useAppContext() {
    return React.useContext(Context);
}

export function ContextProvider(props) {

    const paginationArrowClassname = () => {
        return {
            previous: state.previousPage ? 'pageArrowActive' : 'pageArrowBlocked',
            forward: state.forwardPage ? 'pageArrowActive' : 'pageArrowBlocked',
        }
    }

    const toggleSearch = (value) => {
        let searchItem = value
        if (value.target) {
            value.preventDefault()
            searchItem = value.target.firstChild.value
        }
        setState(p => ({ ...p, searchItem }))
    }

    const togglePagination = (direction) => {
        setState(p => ({ ...p, pageNumber: state.pageNumber + direction }))
    }

    const [state, setState] = React.useState({
        products: [],
        categories: [],
        items: 12,
        pageNumber: 1,
        searchItem: false,
        previousPage: false,
        forwardPage: true,
        isSidebarOpen: false
    })

    React.useMemo(() => {

        const getProducts = async () => {
            const products = await axios.post(
                `${import.meta.env.VITE_API}/getProducts`,
                {
                    items: state.items,
                    pageNumber: state.pageNumber,
                    searchItem: state.searchItem
                }
            )
            setState(p => ({
                ...p,
                products: products.data.data,
                previousPage: products.data.previousPage,
                forwardPage: products.data.forwardPage
            }))
        }
        getProducts()

        const getCategories = async () => {
            const categories = await axios.get(
                `${import.meta.env.VITE_API}/getCategories`
            )
            setState(p => ({ ...p, categories: categories.data }))
        }
        getCategories()

    }, [state.searchItem, state.pageNumber])

    const value = {
        state,
        setState,
        paginationArrowClassname,
        toggleSearch,
        togglePagination
    }

    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    );
}

export const sendClickInfo = (provider) => {
    axios.post('http://localhost:3001/sendClickInfo', { provider })
}