import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

ReactDOM.render(<Login />, document.getElementById('root'));
ReactDOM.render(<Register />, document.getElementById('registerForm'));