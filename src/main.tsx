//
// Copyright 2021 BRAINFRAME.com
//

import React from 'react';
import ReactDOM from 'react-dom';

import { Main } from './components';

const init = () => {
  ReactDOM.render(<Main />, document.getElementById('root'), () => {
    console.log('ok');
  });
};

init();
