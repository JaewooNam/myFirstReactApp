import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'

class App extends React.Component {
  // props go down. to search bar, image list
  onSearchSubmit(term) {
    // GET
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term},
      headers: {
        Authorization: 'Client-ID e86b4b6249663f2210d6dc843c59dc0f4629ddb6cb4d4cfe2ae45725a4610f7d'
      }
    })
  }
  
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App
