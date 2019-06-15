import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' }
  // onChange(changes text in input)
  // onSubmit (sumit a form)

  // Also handle is good for function name i.e) handleInputChange

  
  // Controlled / Uncontrolled form element

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
