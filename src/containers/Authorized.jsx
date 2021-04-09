import { Switch, Route } from 'react-router-dom';
import { StartScreen, ChooseGame, Game } from '../screens';
import { CreateGame } from '../screens/CreateGame/CreateGame'
import { links } from '../constants/roures';
import { createPath } from '../utils';

export const Authorized = () => {
  return (
    <Switch>
      <Route
        exact
        path={createPath(links.authorized.CreateGame)}
        component={CreateGame}
      />
      <Route
        exact
        path={createPath(links.authorized.ChooseGame)}
        component={ChooseGame}
      />
      <Route
        path={createPath(links.authorized.game + '/:id')}
        component={Game}
      />
      <Route path={links.authorized.start} component={StartScreen} />
    </Switch>
  );
};
