import React, {Component} from 'react';
import SidebarList from './SidebarList'

class Sidebar extends Component {
    render () {
        return (
            <div>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <span>Browse Identified Fungi:</span>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">By Name:</div>
                        {SidebarList(["A-E", "F-K", "L-Q", "R-Z"])}
                    </li> 
                    <li className="nav-item">
                        <div className="nav-link">By Scientific Name:</div>
                        {SidebarList(['A-E', 'F-K', 'L-Q', 'R-Z'])}
                    </li> 
                    <li className="nav-item">
                        <div className="nav-link">By Genus:</div>
                        {SidebarList(['Agaricus', 'Amanita', 'Boletus',
                         'Cortinarius', 'Entoloma', 'Hygrocybe', 'Hericium', 'Lactarius', 'Laetiporus',
                         'Russula','Suillus'
                        ])}
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">By Season:</div>
                        {SidebarList(['Spring', 'Summer', 'Fall', 'Winter'])}
                    </li>
                    <li className="nav-item">
                        <div className="nav-link">Browse Images</div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;