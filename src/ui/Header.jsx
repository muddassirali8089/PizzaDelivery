import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../Features/order/SearchOrder'

function Header() {
  return (
    <header>
        <Link to="/">PIZZA DELIVERY</Link>
        <SearchOrder/>
        <p>Ali</p>
    </header>
  )
}

export default Header