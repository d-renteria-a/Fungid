import React, { Component } from 'react'

import Navbar from './Navbar'
import MapContainer from './MapContainer'
// import { API_URL } from '../config'
import '../App.css'
import Sidebar from './Sidebar'
// import ImgUpload from './ImgUpload'
import FormSubmit from './FormSubmit'

export default class App extends Component {
  
  render() {
    return (
      <div className="fixed-top" id="home">
        <div>
          <Navbar />
        </div>
        <div className="col-2" style={{display: 'inline-block'}}>
          <Sidebar />
        </div>
        <div className="" style={{display: 'inline-block'}}>
          <MapContainer />
        </div>
        <div className="col-2 float-right" style={{display: 'inline-block'}}>
          <FormSubmit />
        </div>
        {/* <div className='buttons'>
          {content()}
        </div> */}
      </div>
    )
  }
}
