import React, { useState } from 'react';
import config from '../../lib/config';

export default function SearchBar({ onSuccess }) {
  const [text, setText] = useState('');

  const handleInput = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const LIMIT = 12;
    const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;

    const gifs = await fetch(
        `${config.GIPHY_BASE_URL}/gifs/search?q=${text}&api_key=${GIPHY_KEY}&limit=${LIMIT}`
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
