import React from 'react';

import Deck from './deck';
import Card from './card';

const Page = (props) => {
  const content = props.content || [];

  return (
    <>
      {content.map( (deck,i) => (
        <Deck deck={deck}>
          <Card />
        </Deck>
      ))}
    </>
  );
};

export default Page;