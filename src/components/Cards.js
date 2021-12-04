import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Checkout Epic Options</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/bfs1.jpg'
              text='How to activate debit card in few simple steps'
              path='/services'
            />
            <CardItem
              src='images/BFS2.jpg'
              text='Indian Banking System'
              path='/services'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;