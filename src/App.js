import React, { Component } from 'react';
import './App.scss';

import Card from './Card';

const characters = [
  'mia', 'vincent', 'jules', 'marcellus', 'butch',
];

class App extends Component{

  state = {
    selectedIndex: null,
    
    cards: [
      'red', 'green', 'blue',
      'red', 'green', 'blue',
    ].flatMap(color=>
      characters.slice(0,5)
                .map(c => ({ name: c, open: false, color, done: false }))
    ),
  }

  selectCard = index => {

    const prev = this.state.cards[this.state.selectedIndex];
    const current = this.state.cards[index];

    if( prev?.name === current.name && prev?.color === current.color ){
      // match
      console.log('match');
    }
      
    this.setState(state => ({
      cards: state.cards.map((card, ci)=> (
        ci === index ? ({ ...card, open: !card.open }) : card
      )),
    }) )
  }

  render(){
    return (
      <div className="App">
        <div style={{
          height: 200,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          padding: 5,
        }}>
          {this.state.cards.map((card, ci)=>(
            <Card key={ci} index={ci}
                  {...card}
                  onClick={card.done ? null : this.selectCard} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;





//   open: ((this.state.rxs[rxi]||{}).drugs[di]||{}).open || false,
