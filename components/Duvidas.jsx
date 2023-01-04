import styles from '../styles/Duvidas.module.scss'
import Duvida from './Duvida'
import {duvidas} from '../data.js';

export default function Duvidas() {
  return (
    <div className={styles.container}>
        <h1>Perguntas Frequentes</h1>
        <div className={styles.duvidas}>
          {duvidas.map((item,key) =>(
              <Duvida props={item} key={key}/>
            ))
          }
        </div>

    </div>
  )
}
