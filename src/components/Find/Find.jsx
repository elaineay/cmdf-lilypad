import React, { Component } from 'react'
import SimpleMap from './../SimpleMap'
//import { Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import './Find.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

export default class Find extends Component {
    constructor(props) {
        super(props);
        this.state = {
            padType: null,
            locationName: 'hai',
            cost: null,
            labelWidth: 0,
        }
        this.displayType = this.displayType.bind(this);
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    displayType(type) {
        this.setState({ type: type });
    }

    onSubmit = () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "http://127.0.0.1:5000/api/find"
            axios.get(url).then(function (response) {
                console.log(response.data.rows)
            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response.headers);
                }
                else if (error.request) {
                    console.log(error.request);
                }
                else {
                    console.log(error.message);
                }
                console.log(error.config);
            });
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <h2>FIND FEMININE HYGIENE PRODUCTS NEAR YOU!</h2>
                <div className="inputContainer">
                    <div className="item"><FormControl>
                            <InputLabel htmlFor="age-native-required">Type</InputLabel>
                            <Select
                                native
                                value={this.state.padType}
                                onChange={this.handleChange('padType')}
                                name="padType"
                                inputProps={{
                                    id: 'age-native-required',
                                }}
                            >
                                <option value="" />
                                <option value={true}>Pads</option>
                                <option value={false}>Tampons</option>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </div>

                    <div className="item">
                    <FormControl>
                            <InputLabel htmlFor="age-native-required">Cost</InputLabel>
                            <Select
                                native
                                value={this.state.cost}
                                onChange={this.handleChange('cost')}
                                name="cost"
                                inputProps={{
                                    id: 'age-native-required',
                                }}
                            >
                                <option value="" />
                                <option value={true}>Free</option>
                                <option value={false}>Purchase</option>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl>
                    </div>
                    <div className="item" height="3px">
                        <TextField
                            id="outlined-dense"
                            label="Address"
                            placeholder="Address"
                            margin="dense"
                            helperText="Required"
                            margin="normal"
                            variant="outlined"
                        />
                    </div>

                    <Button onClick={this.onSubmit} height="2em" variant="contained" color="secondary">
                        Submit
                 </Button>
                </div>
                <SimpleMap />
            </div>
        )
    }
}

Find.propTypes = {
    classes: PropTypes.object.isRequired,
};