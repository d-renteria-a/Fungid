import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchEntries } from '../actions'
import { ListGroup } from 'react-bootstrap'

class EntryList extends Component {
    componentDidMount() {
        // let currentState = this.props.state
        console.log('Component Mounts')

        console.log('entries in state')
        
    }
    
    renderEntries() {
        // console.log('props are', this.props);
        let allEntries;
        if(!this.props.state.FetchedEntries.length){
            this.props.fetchEntries()
        }

        ////This needs to run asynchronously
            allEntries = this.props.state.FetchedEntries[0].map(entry => {
                let edibility = entry.edibility;
                if(edibility) {
                    edibility = "Edible";
                } else {
                    edibility = "Not Edible/Poisonous";
                }
    
                return (
                    <ListGroup.Item className='entry-list'>
                        <div>
                            {entry.name}: ({entry.scientific_name})
                            <br></br>
                            Description: {entry.description}
                            <br></br>
                            Edibility: {edibility}
                            <br></br>
                            More Information: {entry.wikipedia_url}
                        </div>
                    </ListGroup.Item>
                )
            })
       
        console.log(this.props.state.FetchedEntries)
        return allEntries;
    }
    
    render() {
       
        return (
                <div className="entry-list" style={{ background: 'snow', height: '90%' }}>
                    <ListGroup>
                        {this.renderEntries()}
                    </ListGroup>
                </div>
           
        )
    }
}

function mapStateToProps(state) {
  return {
      state
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchEntries
        },
        dispatch
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryList);