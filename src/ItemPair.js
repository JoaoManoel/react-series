import React from 'react';
import Item from './Item';

class ItemPair extends React.Component {
  render() {
    return (
      <div className="row">
      {
        this.props.seriePair.map((serie) => {
          return <Item key={serie.id} serie={serie} />
        })
      }
      </div>
    )
  }

}

export default ItemPair;
