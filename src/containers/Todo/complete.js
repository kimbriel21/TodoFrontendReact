import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class Complete extends React.Component{
    goToTodoList = () =>{
        this.props.history.push('/todo');
    }
    render(){
        return(
            <Grid container justify="center" spacing={24}>
                <Grid item xs={12}>
                    Successfully Created
                </Grid>
                <Grid item xs={12}>
                    <Button variant={'contained'} color='primary' onClick={this.goToTodoList}>Todo List</Button>
                </Grid>
            </Grid>
        )
    }

}

export default Complete;