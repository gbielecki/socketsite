import React from 'react';
import {Redirect} from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Logout extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.onLogout();
    }

    render () {
        const {logged} = this.props;
        if (logged) {
            return (<div>Logout</div>
            )
        }
        else
        {
            return (<Redirect to="/"/>)
        }
    }
} 

Logout.propTypes = {
  logged: PropTypes.bool,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func
};

const mapStateToProps = (state) => {
    return {logged: state.logged};
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onLogin: () => dispatch({ type: 'LOGIN' }),
      onLogout: () => dispatch({ type: 'LOGOUT' })
    }
  };
  
  Logout = connect( mapStateToProps, mapDispatchToProps)(Logout)
  
  export default Logout
  