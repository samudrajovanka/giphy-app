import React from 'react'

export default function SearchBar() {
  return (
    <form className="form-search">
      <input type="text" placeholder="Search..." className="form-search__input" required />
      <button type="submit" className="form-search__button">Search</button>
    </form>
  )
}
