import {Form, FormControl, Button} from 'react-bootstrap';         
import React, { Component } from 'react';

class SimpleMap extends Component {

              
        render() {
              return (
                <Form >
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
              );
            }
          }
           
          export default SimpleMap;