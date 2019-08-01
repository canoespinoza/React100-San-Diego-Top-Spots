import React, { Component } from 'react';

const axios = require('axios')

import TopSpot from './topspots.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        topspots: []
    };
  }

  componentWillMount()  {
    axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <div className='jumbotron'>
            <div className='container'>
              <h1 className='display-4'>San Diego Top Spots</h1>
              <p className='lead'>A list of the top 30 places to see in San Diego,CA</p>
            </div>
          </div>
          <div className='jumbotron'>
            { 
              this.state.topspots.map(topspot => (
                <TopSpot
                    key={topspot.id}
                    name={topspot.name}
                    description={topspot.description}
                    location={topspot.location} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
