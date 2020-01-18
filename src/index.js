import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import FEATURES from './FEATURES.js';

ReactDOM.render(<App features={FEATURES}/>, document.getElementById('root'));