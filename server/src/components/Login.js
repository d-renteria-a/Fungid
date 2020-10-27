import React, {Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setCurrentUser } from '../actions';
import { Row, Container, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import logo from '../logo.png';
// import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom';

class Login extends Component {

  submitLogin = (event) => {
    console.log(event.target.value);
      if (event.key === "Enter") {
        this.props.setCurrentUser(event.target.value);
        
        //insert delay or promise here?
        setTimeout(this.props.history.push('/'), 5000);
      }
    };
  submitLoginButton() {
    console.log(this)
  }
  
  
  render() {
    // const history = useHistory();
    return (
      <div>
      <Container fluid>
      
        <Row>&nbsp;</Row>
        <Row>
          <Col></Col>
        <Col md="auto" className="col">
          <h2 style= {{textAlign: "center"}}>FungId</h2>

          <img id= 'home-logo' src={logo} alt="Logo" />
        <h3 style= {{textAlign: "center"}}>Login</h3>
        <InputGroup className="mb-3" onKeyUp={this.submitLogin} name="login-form"><FormControl placeholder="Username"></FormControl></InputGroup>
        <Button variant="outline-dark" onClick={() => this.history.push('/')} className="float-right">Login</Button>
        </Col>
        <Col></Col>
        </Row>
            </Container>
        </div>    
    );
  }
}
  
function mapStateToProps(state) {
  return { loggedInUser: state.loggedinUser}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setCurrentUser
    },
    dispatch
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);

