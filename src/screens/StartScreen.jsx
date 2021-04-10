import { Button } from '../components/Componets';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import DnsIcon from '@material-ui/icons/Dns';

import { links } from '../constants/roures';
import styles from './Style.module.scss';

export const StartScreen = () =>  (
    <div className={styles.intro}>
      <h1>duckgame</h1>
      <div className={styles.btn_part}>
        <Button href={links.authorized.CreateGame} endIcon={<WhatshotIcon htmlColor='white'/>}>Create</Button>
        <Button href={links.authorized.ChooseGame} endIcon={<DnsIcon htmlColor='white'/>}>Choose</Button>
      </div>
      <p>created by Yevhenii and Artem</p>
    </div>
);
