import styles from '../styles/Planos.module.scss'
import Image from 'next/image'
import {planos} from '../data.js';

export default function Planos() {
  return (
    <div className={styles.container}>
        <h1>Escolha seu plano</h1>
        <div className={styles.planos}>
            {planos.map((item,key) => (
             <div className={styles.plano} key={key}>
                <Image 
                   src={item.img} 
                   loader={() => item.img}
                   alt='' 
                   width={300} 
                   height={100} 
                   className={styles.img}/>
                <h2>{item.title}</h2>
                <span>{item.desc}</span>
                <button>ASSINE AGORA</button>
             </div>
            ))}
        </div>
        <p>*O preço pode variar caso a assinatura seja feita através de outras plataformas.</p>
    </div>
  )
}
