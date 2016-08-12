import React from 'react';
import reqwest from 'reqwest';
import ItemPair from './ItemPair';
import emitter from './helper/emitter';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: []
    }
  }

  componentDidMount() {
    emitter.on('searchDone', (series) => {
      this.setState({series: series});
    })
  }

  componentWillUnmount() {
    emitter.removeListener('searchDone');
  }

  render() {

    // filtrando...
    let series = this.state.series.filter((serie) => {
      return serie.poster_path != null;
    });

    // reduzindo para pares... col-md-6
    const Items = series.reduce((pairs, serie, index) => {
      if (index % 2 === 0) {
        pairs.push([]);
      }
      pairs[pairs.length - 1].push(serie);

      return pairs;
    }, [])
    // mapeando
    .map((seriePair, index) => {
      return <ItemPair key={index} seriePair={seriePair} />
    });

    return (
      <div>
        {Items}
      </div>
    )
  }
}

export default List;
