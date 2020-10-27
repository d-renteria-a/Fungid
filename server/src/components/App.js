import React, { Component } from 'react'
import Spinner from './Spinner'
import Images from './Images'
import Buttons from './Buttons'
import Navbar from './Navbar'
import { API_URL } from '../config'
import '../App.css'

export default class App extends Component {
  
  state = {
    uploading: false,
    images: []
  }

  onChange = e => {
    const files = Array.from(e.target.files)
    this.setState({ uploading: true })

    const formData = new FormData()

    const types = ['image/png', 'image/jpeg', 'image/gif']

    files.forEach((file, i) => {
      if (types.every(type => file.type !== type)) {
        return (`'${file.type}' is not a supported format`)
      }
      
      formData.append(i, file)
    })

    fetch(`${API_URL}/image-upload`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(images => {
      this.setState({ 
        uploading: false,
        images
      })
    })
  }

  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    })
  }

  render() {
    const { uploading, images } = this.state

    const content = () => {
      switch(true) {
        case uploading:
          return <Spinner />
        case images.length > 0:
          return <Images images={images} removeImage={this.removeImage} />
        default:
          return <Buttons onChange={this.onChange} />
      }
    }

    return (
      <div>
        <div>
          <Navbar />
        </div>
        
        <div className='buttons'>
          {content()}
        </div>
      </div>
    )
  }
}
