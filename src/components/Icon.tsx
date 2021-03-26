//
// Copyright 2020 DXOS.org
//

import React from 'react';

import SvgIcon from '@material-ui/core/SvgIcon';

const Icon = (props) => (
  <SvgIcon
    {...props}
     viewBox='0 0 487 559'
     style={{
       fill: 'none',
       fillRule: 'nonzero',
       stroke: 'rgb(0,0,0)',
       strokeWidth: '12px'
     }}
  >
    <g
      transform='matrix(1,0,0,1,0,0)'
    >
      <path
        d="M243.44,12.5l230.94,133.333l0,266.667l-230.94,133.333l-230.94,-133.333l0,-266.667l230.94,-133.333Z"
      />
      <path
        d="M279.167,145.833l133.333,66.667l-133.333,66.667l133.333,66.666l-133.333,66.667"
        style={{
          fill: 'none',
          fillRule: 'nonzero',
          stroke: 'rgb(0,0,0)',
          strokeWidth: '83.33px',
          strokeLinecap: 'butt',
          strokeLinejoin: 'bevel'
        }}
      />
      <g>
        <circle cx="193.44" cy="145.833" r="33.333"/>
        <circle cx="193.44" cy="412.5" r="33.333"/>
        <circle cx="110.107" cy="212.5" r="33.333"/>
        <circle cx="110.107" cy="345.833" r="33.333"/>
        <circle cx="193.44" cy="279.167" r="33.333"/>
      </g>
    </g>
  </SvgIcon>
);

export default Icon;
