import React from 'react';
import { Button, Label, Input, Alert } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios'
import {saveToken, getCSRFToken, setCookie} from './Auth';
class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loggedIn:false,
            message:null
        }
        this.api_base = process.env.REACT_APP_API_BASE ? process.env.REACT_APP_API_BASE : '';
    }
    loginForm() {
        return (
            <div className="container h-100">
                <div className="row pt-4 h-100 justify-content-center align-items-center">
                <form className="col-md-6">
                <div className="form-group">
                    <Label for="userId">User ID</Label>
                    <Input type="text" id="user_id" aria-describedby="emailHelp" placeholder="Enter User ID" required />
                </div>
                <div className="form-group">
                    <Label for="password">Password</Label>
                    <Input type="password" id="password" placeholder="Password" />
                </div>
                <Button className="btn btn-primary" onClick={this.submitLogin.bind(this)}>Submit</Button>
                </form>
                </div>
            </div>
        )
    }

    submitLogin(e){
        e.preventDefault();
        let usernameOrEmail = document.querySelector('#user_id').value;
        let password = document.querySelector("#password").value;
        let url = this.api_base + 'api/auth/signin'
        // setCookie("XSRF-TOKEN","87973ee5-38d8-4fc2-a6c7-19078601e905", 1);
        axios.post(url, {
            usernameOrEmail,
            password
        }, {
            headers: {
                'Content-Type': 'application/json',
                "X-XSRF-TOKEN": getCSRFToken()
            }
        }).then(res => {
            console.log(res);
            saveToken(res.data.accessToken);
            this.props.history.push("/");
        }).catch(error => {
            console.log("Login Error: ", error)    
            this.setState({
                    message: "Login failed!",                   
                })
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message ? <Alert color="danger">{this.state.message}</Alert> : null}</div>
                {this.loginForm()}
            </div>
            
            );
    }
}
export default withRouter(Login);