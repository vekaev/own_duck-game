import {Button, Title} from "../components/Componets";
import {links} from "../constants/roures";
import {createPath} from "../utils";

export const StartScreen = () => {
  return (
      <>
        <Title>Duck</Title>
        <Button href={links.authorized.createGame}>Go</Button>
        <Button href={links.authorized.chooseGame}>Continue</Button>
      </>
  )
}
