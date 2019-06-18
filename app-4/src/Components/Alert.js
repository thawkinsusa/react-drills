import React, {Component} from 'react'
import styles from './../App.css'
class Alert extends Component{
    constructor(){
        super()
        this.state = {
        username: '',
        password: ''
        }
    }

    handlerUpdatePassword(password){
        this.setState({password: password});
    }

    handlerUpdateUsername(name){
        this.setState({username:name});
    }

    loginAlert(){
        if(this.state.username !== 'Mattias'){
            alert('Your user name must be Mattias')}
        else if(this.state.password.length < 5 ){
            alert('Mattias your password must be bigger than 5 characters')}
        else{
        alert(`Your username is set to: ${this.state.username}, Your password is set to: ${this.state.password}`)
    }
 }
    render(){
        return(
            <div>
        <input className = 'inputUsername' placeholder="user" onChange={(e)=> this.handlerUpdateUsername(e.target.value)} />
        <input className= 'inputPassword' placeholder="password" onChange={(e)=> this.handlerUpdatePassword(e.target.value)}/>
        <button className='confirmationButton' placeholder='Login' onClick={(click)=> this.loginAlert(click)}>Login</button>
            </div>
        )
    }
}

export default Alert