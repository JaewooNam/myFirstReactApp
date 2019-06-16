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
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  setSpans = () => {
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