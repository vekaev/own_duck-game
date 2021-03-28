import { Button, Title } from '../components/Componets';
import { links } from '../constants/roures';
import { createPath } from '../utils';

export const StartScreen = () => {
  console.log('hello world');
  return (
    <>
      <Title>Duck</Title>
      <Button href={links.authorized.CreateGame}>Create game</Button>
      <br />
      <Button href={links.authorized.ChooseGame}>Continue</Button>
    </>
  );
};
