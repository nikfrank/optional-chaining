import React, { Component } from 'react';
import './App.scss';

import Card from './Card';

const characters = ['mia', 'vincent', 'jules', 'marcellus', 'butch'];

class App extends Component{

  state = {
    selectedIndex: null,
    
    cards: [
      'red', 'green', 'blue',
      'red', 'green', 'blue',
    ].flatMap(color=>
      characters.slice(0,5)
                .map(c => ({ name: c, open: false, color, done: false }))
    ).sort(()=> Math.random() > 0.5 ? -1 : 1),
  }

  selectCard = index => {
    const prev = this.state.cards[this.state.selectedIndex];
    const current = this.state.cards[index];

    if( prev?.name === current.name && prev?.color === current.color ){
      // match

      this.setState(state => ({
        selectedIndex: null,
        cards: state.cards.map((card, ci)=> (
          ci === this.state.selectedIndex ? ({ ...card, done: true }):
          ci === index ? ({ ...card, done: true, open: true }):
          card
        ) ),
      }) );
      
    } else {
      // no match, set selected card
      this.setState(state => ({
        selectedIndex: index,
        cards: state.cards.map((card, ci)=> (
          ci === index ? ({ ...card, open: !card.open }) : card
        )),
      }))

      // no match, second card selection -> close
      if(this.state.selectedIndex?.valueOf)
        setTimeout(()=> this.setState(state => ({
          selectedIndex: null,
          cards: state.cards.map(card => ({ ...card, open: card.done }) ),
        }) ), 900);
    }
  }

  render(){
    return (
      <div className="App">
        {this.state.cards.map((card, ci)=>(
          <Card key={ci} index={ci}
                {...card}
                selected={ci === this.state.selectedIndex}
                onClick={card.done ? undefined : this.selectCard} />
        ))}
      </div>
    );
  }
}

export default App;
