import React from 'react';

const SomeSVGComponent = ({ onClick })=>(
  <svg viewBox='0 0 100 100'>
    <rect x={10} y={10} height={60} width={80} onClick={()=> onClick()} fill='red'/>
    <circle cx={50} cy={50} r={20} fill='blue'/>
  </svg>
);

export default SomeSVGComponent;
