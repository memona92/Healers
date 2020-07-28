import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import $ from 'jquery'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
class Signup extends Component {
  constructor(props){
    super(props)
    this.classes = useStyles.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this)
  }
  handleSignUp(event){
     var user = {userName:$('#firstName').val(),phoneNumber:$('#phoneNumber').val(),email:$('#email').val(),password:$('#password').val()}
     $.post('http://localhost:8000/signUp',
     { myData: user })
     .done(function () { alert(user.userName); })
     .fail(function (jqxhr, settings, ex) { alert('failed, ' + ex); });
     }
  render() {
    return ( <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={this.classes.paper}>
      <Avatar className={this.classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form className={this.classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="userName"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="phoneNumber"
              label="phoneNumber"
              name="lastName"
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
             type="email"
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
            />
               {/* <TextValidator
                    label="Email"
  
                    name="email"
                    
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                /> */}
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={this.classes.submit}
          id='signUp'
          onClick={this.handleSignUp}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
          <Link to="/Login" >Already have an account? Sign in</Link>
          </Grid>
        </Grid>
      </form>
    </div>
  </Container> );
  }
}
export default Signup;