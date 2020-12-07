import React from 'react';
import { connect } from 'react-redux';
import { getResult } from './actions';

class ApiForm extends React.Component{
    render() {
        return (
            <>
                <h1>{this.props.loading ? "loading" : "error"}</h1>
                <button onClick={this.handler}>change to true</button>
            </>
        );
    }
}

const mSTP = (state)=>({
    loading: state.loading
  })

export default connect(mSTP, { getResult })(ApiForm);