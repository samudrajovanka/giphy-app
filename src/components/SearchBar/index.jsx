import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import config from '../../lib/config';
import { setQuery } from '../../slice/querySlice';

export default function SearchBar({ onSuccess }) {
  const query = useSelector((state) => state.query.value);
  const dispatch = useDispatch()
  
  const handleInput = (e) => {
    dispatch(setQuery(e.target.value));
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const LIMIT = 12;
    const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;

    const gifs = await fetch(
        `${config.GIPHY_BASE_URL}/gifs/search?q=${query}&api_key=${GIPHY_KEY}&limit=${LIMIT}`
      ).then((response) => response.json());

    onSuccess(gifs.data);
  }

  return (
    <form className="form-search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="form-search__input"
        required
        onChange={handleInput}
      />
      <button type="submit" className="form-search__button">Search</button>
    </form>
  )
}
