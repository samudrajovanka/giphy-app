import React, { Component } from 'react'
import Gif from '../../components/Gif'
// import SearchBar from '../../components/SearchBar'
// import gifs from '../../data/gifs'
import config from '../../lib/config'

export default class Home extends Component {
  state = {
    gifs: [],
    text: '',
  }

  handleInput = (e) => {
    this.setState({ text: e.target.value });
  }

  getGifs = async (e) => {
    e.preventDefault()

    const { text: query } = this.state
    const LIMIT = 12
    const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY

    const gifs = await fetch(
        `${config.GIPHY_BASE_URL}/gifs/search?q=${query}&api_key=${GIPHY_KEY}&limit=${LIMIT}`
      ).then((response) => response.json());

    this.setState({ gifs: gifs.data });
  };

  render() {
    return (
      <div>
        <form className="form-search" onSubmit={this.getGifs}>
          <input
            type="text"
            placeholder="Search..."
            className="form-search__input"
            required
            onChange={this.handleInput}
          />
          <button type="submit" className="form-search__button">Search</button>
        </form>

        <div className="gifs">
          {this.state.gifs.map((gif) => (
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
}

// export default function Home() {
//   return (
//     <div>
//       <SearchBar />

//       <div className="gifs">
//         {gifs.map((gif) => (
//           <React.Fragment key={gif.id}>
//             {gif.rating === 'g' && (
//               <Gif
//                 url={gif.url}
//                 title={gif.title}
//               />
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   )
// }
