import React from 'react';
import _ from 'underscore';
import $ from 'jquery';
import emitter from './helper/emitter';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  componentWillMount() {
    this.delayedCallback = _.debounce((event) => {
      let search = event.target.value;

      $.getJSON("https://api.themoviedb.org/3/search/tv?api_key=SUACHAVEAQUI&page=1&query=" + search, (data) => {
        emitter.emit('searchDone', data.results);
      });

    }, 1000);
  }

  search(e) {
    e.persist();
    this.delayedCallback(e);
  }

  render() {
    return (
      <div>
        <input id="search" type="search" onChange={this.search} placeholder="Pesquise por series" required />
        <label htmlFor="search"><i className="material-icons">search</i></label>
        <i className="material-icons">close</i>
      </div>
    )
  }
}

export default Search;
