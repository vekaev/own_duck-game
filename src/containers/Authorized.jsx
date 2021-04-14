import { Switch, Route } from 'react-router-dom';
import { StartScreen, ChooseGame, CreateGame, Game } from '../screens';
import { links } from '../constants/roures';
import { createPath } from '../utils';
import CongradulationScreen from '../screens/CongradulationScreen';

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
      <Route  
        path={createPath(links.authorized.finish)}
        component={CongradulationScreen} />
      <Route path={links.authorized.start} component={StartScreen} />
    </Switch>
  );
};
