import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import axios from '../../axios-global';

class  Confirmation extends React.Component{

    onSubmit = () =>{
        const {date , title , description} = this.props.todoData;
        // console.log({date , title , description});
        let formData = {};
        formData.date           = new Date(date).toISOString().slice(0, 19).replace('T', ' ');
        formData.title          = title;
        formData.description    = description;

        axios.post('/api/todos', formData)
            .then(res=>{
                this.props.history.push('/todo-complete');
            })
            .catch(err => {
                alert(err);
            })

    };
    onBack = () => {
        this.props.history.push('/todo-create')
    };

    render(){
        return (
            <Grid container spacing={24}>

                <Grid item xs={6}>
                    Date
                </Grid>
                <Grid item xs={6}>
                    {this.props.todoData.year}-{this.props.todoData.month}-{this.props.todoData.day}
                </Grid>
                <Grid item xs={6}>
                    Title
                </Grid>
                <Grid item xs={6}>
                    {this.props.todoData.title}
                </Grid>

                <Grid item xs={6}>
                    Description
                </Grid>
                <Grid item xs={6}>
                    {this.props.todoData.description}
                </Grid>

                <Grid item container justify="center">
                    <Button variant="contained" color="default" onClick={this.onBack}>
                        BACK
                    </Button>
                    <Button variant="contained" color="primary" onClick={this.onSubmit}>
                        Submit
                    </Button>
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
        onStoreTodo : () => dispatch({type : 'STORETODO'}),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Confirmation);