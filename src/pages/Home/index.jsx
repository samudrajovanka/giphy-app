import React, { useState } from 'react'
import Gif from '../../components/Gif'
import SearchBar from '../../components/SearchBar';

export default function Home() {
  const [gifs, setGifs] = useState([]);

  const handleSuccessSearch = (searchGifts) => {
    setGifs(searchGifts);
  }

  return (
    <div className="container">
      <SearchBar onSuccess={handleSuccessSearch} />

      <div className="gifs">
        {gifs.map((gif) => (
          gif.rating === 'g' && (
            <Gif
              key={gif.id}
              url={gif.images.original.url}
              title={gif.title}
            />
          )
        ))}
      </div>
    </div>
  )
}
