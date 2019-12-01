import React from 'react';

const Deck = (props) => {
  console.log(props);
  return(
    <section className="deck">
           <header><h2>{props.deck.title}</h2></header>
           {React.Children.map(props.children, child =>
            React.cloneElement(child, { card: props.deck.records[0] }))}
    </section>
  )
}

export default Deck;