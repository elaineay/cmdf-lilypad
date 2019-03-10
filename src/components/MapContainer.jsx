import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import { Form } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import CurrentLocation from './Map';

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        isModalOpen: false
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    handleOpen = () => {
        debugger;
        this.setState({ isModalOpen: true });
    }

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
                <Marker onClick={this.onMarkerClick} name={'current location'} />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                    <Form>
                            <div className="dialog">
                            <FormControl>
                                    <TextField label="Name">

                                    </TextField>

                                </FormControl>

                                <FormControl>
                                    <TextField label="Address">

                                    </TextField>

                                </FormControl>
                                <FormControl>
                                    <InputLabel htmlFor="age-native-required">Cost</InputLabel>
                                    <Select
                                        native
                                        value={this.state.age}
                                        name="age"
                                        inputProps={{
                                            id: 'age-native-required',
                                        }}
                                    >
                                        <option value="" />
                                        <option value={10}>Free</option>
                                        <option value={20}>Purchase</option>
                                    </Select>
                                
                                </FormControl>
                                <FormControl>
                                    <InputLabel htmlFor="age-native-required">Type</InputLabel>
                                    <Select
                                        native
                                        value={this.state.age}
                                        name="age"
                                        inputProps={{
                                            id: 'age-native-required',
                                        }}
                                    >
                                        <option value="" />
                                        <option value={10}>Pad</option>
                                        <option value={20}>Tampon</option>
                                    </Select>
            
                                </FormControl>
                            </div>
                        </Form>
                    <Button variant="contained" color="secondary" onClick={this.handleOpen}> Add Location</Button>
                   
                </InfoWindow>

              
            </CurrentLocation>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCUQa-qmaT4rQXjTHab9XZRybV10jIyG0E'
})(MapContainer);