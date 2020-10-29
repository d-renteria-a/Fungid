import React, { Component } from 'react'

import Navbar from './Navbar'
import MapContainer from './MapContainer'
// import { API_URL } from '../config'
import '../App.css'
import Sidebar from './Sidebar'
import FormSubmit from './FormSubmit'
import ListContainer from './ListContainer'
import { bindActionCreators } from 'redux'
import { fetchEntries } from '../actions'
import { connect } from 'react-redux'

class App extends Component {
  
  render() {
    return (
      <div id="home">
        <div className="fixed-top">
          <Navbar />
        </div>
        <div className="home-container">
          <div className="col-2 sidebar" style={{display: 'inline-block'}}>
            <Sidebar />
          </div>
          
          <div className="float-right form-container" style={{display: 'inline-block'}}>
            <FormSubmit />
          </div>
          <div className="map-container" style={{display: 'inline-block'}}>
            {/* <MapContainer /> */}
          </div>
        </div>
        <div className="col-2">

        </div>
        <div className="col-4 offset-2 list-container">
        <ListContainer />
        </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    fetchedEntries: state.fetchedEntries
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchEntries
    },
    dispatch
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(App);