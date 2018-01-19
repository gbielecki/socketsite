import React from 'react';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     Switch
//   } from 'react-router-dom';
// import { browserHistory} from 'react-router';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import { connect } from 'react-redux';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  // static propTypes = {
  //     logged: PropTypes.bool,
  //     onLogin: PropTypes.func,
  //     onLogout: PropTypes.func
  // }


    render() {
      console.log(this.props)
        return (
          <div>
            <Header />
            <Main />
            <Footer /> 
          </div>
        );
    }
}
