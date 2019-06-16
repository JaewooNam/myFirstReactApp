// one image by itself
import React from 'react'

class ImageCard extends React.Component {
  constructor(props) {
    // React Refs
    // Give access to single DOM elemeent
    // We create refs in the constructor
    // , assign them to instance variables,
    // then pass to particular JSX element as  props
    super(props)

    this.imageRef = React.createRef()
  }

  componentDidMount() {
    console.log(this.imageRef)
    // why console.log 0 ???
    // beacuse console.log works before image loaded
    console.log(this.imageRef.current.clientHeight)
  }

  render() {
    const { description, urls } = this.props.image

    return (
      <div>
        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    )
  }
}

export default ImageCard