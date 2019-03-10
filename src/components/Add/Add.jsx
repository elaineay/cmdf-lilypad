import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Form } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import MapContainer from './../MapContainer'
import './Add.css';
import { Dialog, DialogContent, DialogActions } from '@material-ui/core';

class Add extends Component {

    state = {
        showMap: false,
        type: '',
        price: '',
        isModalOpen: false
    };

    handleMap = () => {
        if (this.state.showMap === true) {
            this.setState({ showMap: false });
        }
        else { this.setState({ showMap: true }); }
    }

    handleOpen = () => {
        this.setState({ isModalOpen: true });
            this.setState({showMap : false});
    }

    handleClose = () => {
        this.setState({ isModalOpen: false });
    }

    handleSubmit= () => {
        this.setState({ isModalOpen: false });
    }

    render() {
        return (
            <div className="container">
                <Typography variant="h3" gutterBottom>ADD LOCATIONS TO THE LIST!</Typography>
                <Divider/>
                
                <Form className = "bigForm">
                    <div className = "smallForm">
                        <Button variant="contained" color="secondary" onClick={this.handleMap}> Add Current Location</Button>
                        <Typography variant = "h5"> OR </Typography>
                    <Button variant="contained" color="secondary" onClick={this.handleOpen}> Enter Address</Button>
                    </div>
                </Form>

                   {this.state.showMap && <MapContainer className = "map" />}

                <Dialog
                    open={this.state.isModalOpen}
                    max-Width='lg'
                    fullWidth = 'true'  >
                    <DialogContent>
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
                                    <FormHelperText>Required</FormHelperText>
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
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>
                            </div>
                        </Form>
                    </DialogContent>
                    <DialogActions className = "box">
                            <Button onClick={this.handleClose} color="secondary">
                                Close
                        </Button>
                            <Button onClick={this.handleSubmit} color="secondary">
                                Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

        );
    }
}

export default (Add);