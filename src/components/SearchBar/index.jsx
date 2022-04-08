import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import config from '../../lib/config';
import { setQuery } from '../../slice/querySlice';

const LIMIT = 12;

export default function SearchBar({ onSuccess }) {
  const query = useSelector((state) => state.query.value);
  const dispatch = useDispatch();
  
  const handleInput = (e) => {
    dispatch(setQuery(e.target.value));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const searchEndPoint = `${config.GIPHY_BASE_URL}/gifs/search?api_key=${config.GIPHY_KEY}&q=${query}&limit=${LIMIT}`;

    const gifs = await fetch(searchEndPoint)
      .then((response) => response.json());

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
