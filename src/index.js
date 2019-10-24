import 'reset.css/reset.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BeerOfTheDay } from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BeerOfTheDay />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
