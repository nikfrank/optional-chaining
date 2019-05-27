import React from 'react';

import { CardBack } from 'react-deck-o-cards';

import mia from './images/mia.png';
import vincent from './images/vincent.png';
import jules from './images/jules.png';
import marcellus from './images/marcellus.png';
import butch from './images/butch.png';

const imgIndex = { mia, vincent, jules, marcellus, butch };

export default ({ onClick, index, open, name, color, selected })=> (
  <div onClick={()=> onClick?.(index)}
       className={'card ' + (open ? 'open ' : '') + (selected ? 'selected' : '')}>
    <svg viewBox='0 0 131 200' style={{ width: '100%' }}>
      <CardBack xOffset={0} yOffset={0}
                cardWidth={131} cardHeight={200}/>
    </svg>
    
    <div className='cardfront' style={{ backgroundColor: color }}>
      <img alt={name} src={imgIndex[name]}/>
    </div>
  </div>
);
