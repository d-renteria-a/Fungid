import React, {Component} from 'react';

class Sidebar extends Component {
    render () {
        return (
            <div>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <span>Browse Identified Fungi:</span>
                    </li>
                    <li className="nav-item">
                        <p>By Name</p>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">By Genus</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">By Season</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Browse Images</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;