import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import {connect} from 'react-redux';
import Button from "@material-ui/core/Button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Create extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            date                : new Date(),
            dateError           : '',
            title               : '',
            titleError          : '',
            description         : '',
            descriptionError    : '',
        };
        this.handleChangeDate = this.handleChangeDate.bind(this);
    }

    onNextForm = () =>{
        let titleError = '';
        let descriptionError ='';
        let validation = true;
        if (this.state.title === ''){
            titleError = 'title is required';
            validation = false;

        }

        if (this.state.description === ''){
            descriptionError = 'description is description';
            validation = false;
        }

        if (validation){
            const {date , title,  description} = this.state;

            this.props.onStoreTodo({date : date, year : date.getFullYear(), month : date.getMonth(), day :  date.getDate(), title : title,  description : description});
            this.props.history.push('/todo-confirmation');
        }

        this.setState(
            {...this.state,
                descriptionError : descriptionError,
                titleError : titleError,
            }
        )
    };

    handleChange = name => event => {
        this.setState({
            ...this.state,
            [name]: event.target.value
        });
    };

    handleChangeDate(date) {
        this.setState({
            ...this.state,
            date: date
        });
    }

    onClear = () =>{
        this.setState({
            date                : new Date(),
            dateError           : '',
            title               : '',
            titleError          : '',
            description         : '',
            descriptionError    : '',
        });
    };

    render(){
        const {titleError, descriptionError, dateError} = this.state;
        return(

                <Grid container spacing={24} alignItems="center">

                    <Grid item xs={4} >
                        Date * (required)
                    </Grid>
                    <Grid item xs={4} >
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.handleChangeDate}
                            minDate={new Date()} /*props for user can only select date from this day to future*/
                            placeholderText="Select a date between today and 5 days in the future"
                        />
                    </Grid>
                    <Grid item xs={4} >
                        {dateError}
                    </Grid>

                    <Divider />

                    <Grid item xs={4} >
                        Title * (required)
                    </Grid>
                    <Grid item xs={4} >
                        <TextField
                            id="title"
                            label="title"
                            onChange={this.handleChange('title')}
                            value={this.state.title}

                        />
                    </Grid>
                    <Grid item xs={4} >
                        {titleError}
                    </Grid>

                    <Divider />

                    <Grid item xs={4} >
                        description * (required)
                    </Grid>
                    <Grid item xs={4} >
                        <TextField
                            style={{zIndex : '0'}}
                            id="description"
                            label="description"
                            multiline={true}
                            rows={10}
                            variant="outlined"
                            onChange={this.handleChange('description')}
                            value={this.state.description}
                        />
                    </Grid>
                    <Grid item xs={4} >
                        {descriptionError}
                    </Grid>

                    <Divider />



                    <Grid container item xs={12} justify="center" spacing={8}>
                        <Grid item xs={2} >
                            <Button variant="contained" color="default" onClick={this.onClear}>
                                Clear
                            </Button>
                        </Grid>
                        <Grid item xs={2} >
                            <Button variant="contained" color="primary" onClick={this.onNextForm}>
                                Next
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        todoData : state.todo.todoStore,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onStoreTodo : (data) => dispatch({type : 'STORETODO', data : data}),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Create);