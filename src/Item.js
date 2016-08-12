import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <div className="col s12 m6 g6">
        <div className="card horizontal">
          <div className="card-image">
            <img src={`https://image.tmdb.org/t/p/w185/${this.props.serie.poster_path}`}/>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p><b>{this.props.serie.original_name}</b></p>
              <br/>
              <p>{this.props.serie.genre_ids}</p>
              <br/>
              <p>{this.props.serie.overview.slice(0, 155)} ...</p>
            </div>
            <div className="card-action">
              <a href={`https://www.themoviedb.org/tv/${this.props.serie.id}`}>Mais informações sobre {this.props.serie.original_name}</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Item;
