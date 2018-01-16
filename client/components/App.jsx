import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import { browserHistory} from 'react-router';

import Header from './Header.jsx';
import Main from './Main.jsx';


export default class App extends React.Component {
    render() {
        return (
          <div>
            <Header />
            <Main />
            <footer>
              Copyright 2018 Polarbits
            </footer>
          </div>
        );
    }
}


