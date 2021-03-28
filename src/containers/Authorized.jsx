import {
    Switch,
    Route,
} from "react-router-dom";
import {StartScreen, CreateGameScreen} from "../screens";
import {links} from "../constants/roures";

export const Authorized = () => {
    return (
        <Switch>
            <Route exact path={links.authorized.createGame} component={CreateGameScreen}/>
            <Route path={links.authorized.start} component={StartScreen}/>
        </Switch>
    )
}
