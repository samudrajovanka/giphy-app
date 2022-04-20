import React, { useEffect, useState } from 'react';
import Gif from '../../components/Gif';
import config from '../../lib/config';

export default function Trending() {
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrendingGifs = async () => {
      const trendingEndPoint = `${config.GIPHY_BASE_URL}/gifs/trending?api_key=${config.GIPHY_KEY}`;

      const gifs = await fetch(trendingEndPoint)
        .then((response) => response.json());

      setTrendingGifs(gifs.data);
      setLoading(false);
    };

    getTrendingGifs();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="gifs">
          {trendingGifs.map((gif) => (
            <Gif
              key={gif.id}
              url={gif.images.original.url}
              title={gif.title}
            />
          ))}
        </div>
      )}
      
    </div>
  )
}
