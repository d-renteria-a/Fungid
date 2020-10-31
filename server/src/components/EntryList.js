import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { fetchEntries } from '../actions'
import { ListGroup } from 'react-bootstrap'

class EntryList extends Component {
    renderEntries() {
        // console.log('props are', this.props);
        let allEntries;
        let returnedEntries;

        let count = 0;
        const Counter = () => {
            count++
        }

        if(!this.props.state.FetchedEntries.length){
            this.props.fetchEntries()
            returnedEntries = this.props.state.FetchedEntries;
        } else {
            returnedEntries =this.props.state.FetchedEntries[0];
        }
      
        allEntries = returnedEntries.map(entry => {
            
            let edibility = entry.edibility;
            if(edibility) {
                edibility = "Edible";
            } else {
                edibility = "Not Edible/Poisonous";
            }

            return (
                <ListGroup.Item className='entry-list'>
                    <div key={"ListGroup" + count}>
                        {entry.name}: ({entry.scientific_name})
                        <br></br>
                        Description: {entry.description}
                        <br></br>
                        Edibility: {edibility}
                        <br></br>
                        More Information: {entry.wikipedia_url}
                    </div>
                    {Counter()}
                </ListGroup.Item>
            )
        })
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