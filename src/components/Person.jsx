import React, { Component } from 'react';
import Persons from './Persons';
import logo from '../assets/logo.png';

class Person extends Component {
    state = { 
          persons: [],
           isPersonLoaded: true
         };
    componentDidMount()
    {
         fetch("https://ghibliapi.herokuapp.com/People")
        .then(res => res.json())
        .then(obj => this.setState({ persons: obj}))
        this.showPerson()
        
    }

    showPerson = () => {
        this.setState({ isPersonLoaded: !this.state.isPersonLoaded})
    }
    render(){
        return(
            <div>
                <img src={logo} alt='logo' style={{ width: 300}} />
            {
                this.state.isPersonLoaded ? (
                    <Persons persons={this.state.persons} />
                )  : null
            }
                    <h1>Loading....</h1>
                    {/* <button onClick={this.showFilms}>Load Films</button> */}
                    <button onClick={this.showPerson}>Load Person</button>
                     </div>
        );
    }
}

export default Person;