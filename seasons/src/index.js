import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
// Rule of Class Component
// Must be a JS class
// Must extend react.component
// must define  a render method that
// return some amount  of JSX
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     err => console.log(err)
//   )
  
//   return <div>Latitude: </div>
// }


// Rulespf State
// Only usable with class  components
// You will confuse props with state
// State  is a JS obj that contain data relevant to a components
// Updating state on a component causes  the component to (almost) instantly rerender
// state must be initialized when a  component is created

class App extends React.Component {
  // first called
  // State must be initialized when a component is created
  // State cna onluy be updated using the function 'setState'
  
  state  = { lat: null, errorMessage: '' }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    )
  }

  componentDidUpdate() {
    // everytime new props, click buttons..like this
  }

  componentWillUnmount() {
    // remove component from screen
    
  }
  
  // React says we have to define render!!
  render() {
    if  (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      // send propt to seandisplay
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <div>Loading!</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)