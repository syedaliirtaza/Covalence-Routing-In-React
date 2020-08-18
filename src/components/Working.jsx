import React, { Component } from 'react';
import Films from './Films';
import Persons from './Persons';
import logo from '../assets/logo.png';


class Working extends Component {
    state = { films: [],
         isLoaded: true ,
         };
    componentDidMount()
    {
        fetch("https://ghibliapi.herokuapp.com/films/")
        .then(res => res.json())
        .then(obj => this.setState({ films: obj}))
        this.showFilms();
        
    }

    showFilms = () =>{
        this.setState({ isLoaded: !this.state.isLoaded
        });

    }
    render(){
        return(
            <div>
                <img src={logo} alt='logo' style={{ width: 300}} />
                {
                this.state.isLoaded ? (
                    <Films films={this.state.films} />
                ) : null               
            }
                    <h1>Loading....</h1>
                    <button onClick={this.showFilms}>Load Films</button>
                    {/* <button onClick={this.showPerson}>Load Person</button> */}
                     </div>
        );
    }
}

export default Working;