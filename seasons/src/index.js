import React from 'react'
import ReactDOM from 'react-dom'

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
  constructor(props) {
    super(props)

    // Initialize state
    // key value pair
    // THIS IS THE ONLY TIME we do direct assignment
    // to this.state
    this.state = { lat: null, errorMessage: '' }

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude })
        // we did not !!
        // this.state.lat = position.coords.latitude
      },
      err => {
        this.setState({ errorMessage: err.message })
      }
    )
  }

  // React says we have to define render!!
  render() {
    if  (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div>Loading!</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)