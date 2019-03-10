import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import SimpleMap from './SimpleMap'
//import './Add.css';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMap: false,
            type: '',
            price: '',
            lat: '',
            lon: '',
            radius: '',

        };
        //this.handleChange = this.handleChange.bind(this);
        //this.showForm = this.showForm.bind(this);
        //this.closeForm = this.closeForm.bind(this);
    }

    render() {
        return (
            <div>
                <h2> ADD LOCATIONS TO THE LIST!</h2>
                <p>Let's contribute</p>
                <Button variant="outline-primary">Primary</Button>
                <SimpleMap/>
            </div>
          
        );
    }
}

export default(Add);