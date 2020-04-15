import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAsteroidDetails, randomAsteroidDetails } from './service/asteroid/action';
import { Button, Input } from '@material-ui/core';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            viewDetails: false
        };
    }

    onChangeasteroid = (e) => {
        this.setState({
            id: e
        })
    }

    asteriodDetails = (randomId) => {
        if(randomId) {
            this.props.getAsteroidDetails(randomId)
        } 
        this.setState({
            viewDetails: true
        })
    } 

    
    sumbitAsteriodDetails = (randomId) => {
        this.props.getAsteroidDetails(this.state.id)
        this.setState({
            viewDetails: true,
            id: ''
        })
    } 

    componentDidUpdate=(prevProps, prevState)=>{
        if(this.props.asteroidReducer.randomId !== prevProps.asteroidReducer.randomId && this.props.asteroidReducer.randomId!==null) {
            this.asteriodDetails(this.props.asteroidReducer.randomId)
        }
        
    }

    randomAsteriodDetails = () => {
        this.props.randomAsteroidDetails()
        this.setState({
            viewDetails: true
        })
    } 

    back = () => {
        this.setState({
            viewDetails: false
        })
    }

    render() {
        const { id, viewDetails } = this.state
        const {asteroidDetails, isLoading } = this.props.asteroidReducer

        return (
            <>
                {!viewDetails ?
                    <div className="col-sm-12">
                        <Input  autoFocus onChange={(e)=> this.onChangeasteroid(e.target.value) } />
                        <Button disabled={ id!=='' ? false : true } onClick={this.sumbitAsteriodDetails} style={{margin: '15px'}} variant="contained" color="primary">submit</Button>
                        <Button onClick={this.randomAsteriodDetails} variant="contained" color="primary">Random</Button>
                    </div>
                    : 
                    asteroidDetails!==null? 
                        <div className="text-center col-sm-12">
                            <div><strong>name:</strong> {asteroidDetails.name} </div>
                            <br/>
                            <div><strong>nasa_jpl_url:</strong> {asteroidDetails.nasa_jpl_url}</div>
                            <br/>
                            <div><strong>is_potentially_hazardous_asteroid:</strong> {asteroidDetails.is_potentially_hazardous_asteroid === true ? 'true' :'false' }</div>
                            <br/>
                            <Button onClick={this.back} variant="contained" color="primary">Back</Button>
                        </div> :
                        isLoading ? 'isLoading...' :
                        <div className="text-center col-sm-12">
                            <div>Nodata </div>
                            <br/>
                            <Button onClick={this.back} variant="contained" color="primary">Back</Button>
                        </div>
                }
            </>
        );
    }
}


const mapStateToProps = state => ({
    ...state
  });
  
  const mapDispatchToProps = dispatch => bindActionCreators({
    getAsteroidDetails, randomAsteroidDetails
  }, dispatch)
  
  
  
  export default (connect(mapStateToProps, mapDispatchToProps)(Home));
