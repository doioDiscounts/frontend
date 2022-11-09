import React from "react"
import axios from 'axios'

export const Context = React.createContext()

export const hooks = () => {

    const [state, setState] = React.useState({
        products: [],
        categories: [],
        items: 12,
        pageNumber: 1,
        searchItem: false,
        sidebarActive: false,
        previousPage: false,
        forwardPage: true
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

    return { state, setState }
}

export const toggleSidebar = (context) => {
    context.setState(p => ({ ...p, sidebarActive: !context.state.sidebarActive }))
}

export const sidebarClassname = (context) => {
    let classname = 'sidebarClosed'
    if (context.state.sidebarActive) {
        classname = 'sidebarOpened'
    }
    return classname
}

export const paginationArrowClassname = (context) => {
    return {
        previous: context.state.previousPage ? 'pageArrowActive' : 'pageArrowBlocked',
        forward: context.state.forwardPage ? 'pageArrowActive' : 'pageArrowBlocked',
    }
}

export const toggleSearch = (context, value) => {
    let searchItem = value
    if (value.target) {
        value.preventDefault()
        searchItem = value.target.firstChild.value
    }
    context.setState(p => ({ ...p, searchItem }))
}

export const sendClickInfo = (provider) => {
    axios.post('http://localhost:3001/sendClickInfo', { provider })
}

export const togglePagination = (context, direction) => {
    context.setState(p => ({ ...p, pageNumber: context.state.pageNumber + direction }))
}