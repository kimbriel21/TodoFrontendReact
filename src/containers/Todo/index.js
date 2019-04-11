import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from '../../axios-global';


const styles = {
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
        fontStyle : 'bold',
    },

};

class Member extends React.Component{
    state = {
        tableData : [],
        modalForm : false

    };

    componentWillReceiveProps(nextProps, nextContext) {
        /*
        * Do : Sync State to props
        * Don't : cause side effects
        */
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        /*
        * Do : Decide whether to continue or not
        * Don't : cause side effects
        */
        return true;
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        /*
        * Do : Sync State to props
        * Don't : cause side effects
        */
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        /*
        * Do : cause side effect (best for axios request)
        * Don't : update state (triggers re-render)
        */

    }
    componentWillMount() {
       this.getData();
    }
    componentDidMount() {
        /*life cycle hook for getting data to the server after mounting*/
    }

    getData = () =>{
        axios.get('/api/todos?showAll=1')
            .then(res =>{
                this.setState({
                    ...this.state,
                    tableData : res.data.data,
                });
            })
            .catch(err => {
                alert(err.response.data.message);
            });
    };

    openCreateForm = () =>{
        this.props.history.push('/todo-create');
    };

    render (){
        const {tableData} = this.state;

        return(
            <div style={{width:'100%'}}>

                <Card style={{width:'100%'}}>
                    <div  style={{display : 'flex', justifyContent:'center' ,padding : '15px 30px'}}>
                        <div style={{alignSelf:'center'}}>
                            <Typography variant="title" style={{textAlign:'center'}}>TODOS</Typography>
                        </div>
                        <div style={{marginLeft: 'auto'}}>
                            <Button variant="contained" color="primary" onClick={this.openCreateForm}>
                                Create Todo
                            </Button>
                        </div>
                    </div>
                </Card>

                <Paper style={{width: '100%', marginTop: '40px', overflowX: 'auto',}}>
                    <Table>
                        <TableHead>
                            <TableRow >
                                <TableCell>Date</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                tableData.map((data, index)=>{
                                    const {id, date, title, description} = data;
                                    return <TableRow key={id}>
                                                <TableCell>{date}</TableCell>
                                                <TableCell>{title}</TableCell>
                                                <TableCell>{description}</TableCell>
                                            </TableRow>
                                })
                            }
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}

Member.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Member);