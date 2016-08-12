import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import List from './List'

class App extends React.Component {
  render() {
    return (
      <div>
        <List />
      </div>
    )
  }
}

ReactDOM.render(<Search />, document.querySelector("#searchbar"));
ReactDOM.render(<App />, document.querySelector("#app"));
