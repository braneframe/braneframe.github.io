//
// Copyright 2021 BRANEFRAME.com
//

import React from 'react';
import ReactDOM from 'react-dom';

import { Main } from './components';

import '../resources/css/fonts.css';

const init = () => {
  ReactDOM.render(<Main />, document.getElementById('root'), () => {
    console.log('ok');
  });
};

init();
