import React from 'react';

export const Game = ({ match }) => {
  return <div>{match.params.id}</div>;
};
