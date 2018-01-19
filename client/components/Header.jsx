import React from 'react';
import NavBar from './NavBar.jsx';


export default class Header extends React.Component {
    constructor(props){
        super(props); 
    }

    render() {
        return (
            <header>
                <NavBar />
            </header>
        )
    }
}