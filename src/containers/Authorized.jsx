import {
    Switch,
    Route,
} from "react-router-dom";
import {StartScreen, CreateGameScreen} from "../screens";
import {links} from "../constants/roures";
import {createPath} from "../utils";

export const Authorized = () => {
    return (
        <Switch>
            <Route exact path={createPath(links.authorized.createGame)} component={CreateGameScreen}/>
            <Route path={createPath(links.authorized.start)} component={StartScreen}/>
        </Switch>
    )
}
