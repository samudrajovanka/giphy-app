import React from 'react';
import PropTypes from 'prop-types';

export default function Gif({ url, title }) {
  return (
    <div className="gif">
      <img className='image' src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

Gif.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
