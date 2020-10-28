import React, {Component} from 'react';
import Search from './Search'
import logo from '../logo.png';

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-light bg-light">
               
                <form className="form-inline" style= {{width: '100%'}}>
                    <img id='nav-logo' src={logo} alt="Logo" />
                   <Search />
                   <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a> {/*Add Links*/}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">My Fungi</a>
                        </li>
                    </ul>
                    <ul className ="nav">
                        <div className="nav-item nav-text form-inline float-right"> {/*This will be a link*/}
                            <span>Username</span>
                        </div>
                        <div className="float-right" style={{display: 'inline-block'}}> {/*This will be a link*/}
                            <span>
                                    <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                                        <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                                    </svg>
                                </span>
                        </div>
                   </ul>
                </form>
            </nav>
        )
    }
}

export default Navbar;