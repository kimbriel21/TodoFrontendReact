import React from 'react';
import Modal from "@material-ui/core/Modal/Modal";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
// import OutlinedInput  from '@material-ui/core/OutlinedInput';
import InputLabel  from '@material-ui/core/InputLabel';
import FormControl  from '@material-ui/core/FormControl';

class Form extends React.Component{
    componentDidMount(){

    }
    render(){
        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.props.modalForm}
                    onClose={this.props.handleClose}
                >
                    <div style={{
                        top: `50%`, left: `50%`,
                        transform: `translate(-50%, -50%)`,
                        position: 'absolute',
                        width: 'calc(100% - 200px)',
                        backgroundColor: '#f4f4f4',
                        boxShadow: 5,
                        outline: 'none',
                    }}
                    >
                        <div>
                            <div style={{height : '50px', background : '#f4f4f4', display : 'flex', alignItems : 'center', justifyContent : 'space-between', backgroundColor : '#3F51B5'}}>
                                <h3 style={{paddingLeft : 20, color: '#f4f4f4'}}>Create TODO</h3>
                                <button style={{marginRight : 20, color: '#f4f4f4', backgroundColor : 'transparent'}}>X</button>
                            </div>
                        </div>
                        <div style={{padding: '20px 15px'}}>
                            <Grid container spacing={16}>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        id="outlined-name"
                                        label="Enter First Name"
                                        // value={this.state.name}
                                        // onChange={this.handleChange('name')}
                                        margin="none"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        id="outlined-name"
                                        label="Enter Middle Name"
                                        // value={this.state.name}
                                        // onChange={this.handleChange('name')}
                                        margin="none"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        id="outlined-name"
                                        label="Enter Last Name"
                                        // value={this.state.name}
                                        // onChange={this.handleChange('name')}
                                        margin="none"
                                        variant="outlined"
                                        fullWidth={true}
                                        style={{height: 50}}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        id="date"
                                        label="Birthday"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        fullWidth={true}
                                        variant="outlined"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <FormControl >
                                        <InputLabel htmlFor="age-simple">Age</InputLabel>
                                        <Select
                                            value={10}
                                            // onChange={this.handleChange}
                                            fullWidth={true}
                                            inputProps={{
                                                name: 'age',
                                                id: 'age-simple',
                                            }}

                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>

                                </Grid>
                            </Grid>
                        </div>


                    </div>
                </Modal>
            </div>)
    }
}

export default Form;