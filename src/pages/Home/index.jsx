import React, { useState } from 'react'
import Gif from '../../components/Gif'
import SearchBar from '../../components/SearchBar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gifs: {
    gap: theme.spacing(3),
  }
}));

export default function Home() {
  const styles = useStyles();
  const [gifs, setGifs] = useState([]);

  const handleSuccessSearch = (searchGifts) => {
    setGifs(searchGifts);
  }

  return (
    <div className="container">
      <SearchBar onSuccess={handleSuccessSearch} />

      <Grid container justifyContent="center" className={styles.gifs}>
        {gifs.map((gif) => (
          gif.rating === 'g' && (
            <Gif
              key={gif.id}
              url={gif.images.original.url}
              title={gif.title}
            />
          )
        ))}
      </Grid>

      {/* <div className="gifs">
        {gifs.map((gif) => (
          gif.rating === 'g' && (
            <Gif
              key={gif.id}
              url={gif.images.original.url}
              title={gif.title}
            />
          )
        ))}
      </div> */}
    </div>
  )
}
