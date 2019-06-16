import React from 'react'
import SongList from './SongList'
/*
 * < Redux >
 * Reducers - song list reducer, selected song reducer
 * : Redux store contains all of reducers
 * Action creators - selected songs
*/

// < React-Redux project system >
// /src
//   /actions - contains files related to action creators
//   /components - files related to components
//   /reducers - files related to reducers
//   index.js - Sets up both the react and redux sides of the app

const App = () => {
  return (
    <div>
      <SongList />
    </div>
  ) 
}

export default App
