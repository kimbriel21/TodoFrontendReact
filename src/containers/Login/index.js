import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import Button from '@material-ui/core/Button';
import axios from '../../axios-global';


const styles = {
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
        fontStyle : 'bold',
    },

};

class Login extends React.Component{
    //states and functions
    state = {
        email : '',
        password : '',
    };

    handleChange = name => event => {
        this.setState({
            ...this.state,
            [name]: event.target.value
        });
    };

    onLogin = () =>{

        let req_data = {};

        req_data.username       = this.state.email;
        req_data.password       = this.state.password;
        req_data.grant_type     = "password";
        req_data.client_id      = "1";
        req_data.client_secret  = "PqEJf38eARKR9RqwSZyg25e8slQdXvKIRgPXjbz3";
        req_data.scope          = "";

        axios.post('/oauth/token', req_data).then(res =>
        {
            localStorage.setItem("token", "Bearer "+ res.data.access_token);
            this.props.history.push('/todo');
            window.location.reload();
        })
        .catch(err =>
        {
            alert(err.response.data.message);
        })
        .finally(()=>{

        });
    };

    render (){
        return(
            <div style={{display : 'flex', justifyContent: 'center', alignItems : 'center', height : '100vh',}}>
                <Paper style={{height : 250, width : 450}}>
                    <div style={{height : '50px', background : '#f4f4f4', display : 'flex', alignItems : 'center', justifyContent : 'space-between', backgroundColor : '#3F51B5'}}>
                        <h3 style={{paddingLeft : 20, color: '#f4f4f4'}}>LOGIN PAGE</h3>
                    </div>
                    <div style={{margin : 10}}>
                        <Grid container spacing={16}>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-name"
                                    label="Email"
                                    value={this.state.email}
                                    onChange={this.handleChange('email')}
                                    margin="none"
                                    variant="outlined"
                                    fullWidth={true}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-name"
                                    label="Password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleChange('password')}
                                    margin="none"
                                    variant="outlined"
                                    fullWidth={true}
                                />
                            </Grid>
                        </Grid>

                        <div style={{display:'flex', justifyContent : 'flex-end', marginTop : 10}}>
                            <Button variant="contained" color="primary" onClick={this.onLogin}>
                                LOGIN
                            </Button>
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Login);