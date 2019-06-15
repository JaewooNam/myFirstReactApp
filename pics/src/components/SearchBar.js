import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }
  // onChange(changes text in input)
  // onSubmit (sumit a form)
  // Also handle is good for function name i.e) handleInputChange
  // Controlled / Uncontrolled form element

  /*
  * < Controlled Elements >
  * User types in input
  * Callback gets invokes
  * We call setstate with the new value
  * Component rerenders
  * Input is told what its value is (coming from state)
  */

  onFormSubmit = (event) => {
    event.preventDefault()
    // this is not equal search bar class
    console.log(this.state.term) // error
    // What is 'this' used for in a class?
    // How is the value of 'this' determined in a function ?
    // -> arrow  function can be solved
  }

  render() {
    return (
      <div className="ui segment">
        <form
          onSubmit={this.onFormSubmit}
          className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value.toUpperCase() })}
            />
            </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
