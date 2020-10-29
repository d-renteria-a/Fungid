import React, {Component} from 'react';
import EntryList from './EntryList'

class ListContainer extends Component {
    render() {
        return (
            <div>
                {/* <h4>Recently Found Fungi:</h4> */}
                <EntryList />
            </div>
        )
    }
}

export default ListContainer;