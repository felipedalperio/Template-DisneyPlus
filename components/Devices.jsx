import styles from '../styles/Devices.module.scss'
import Image from 'next/image'
import {devices} from '../data.js'

export default function Devices() {
  return (
    <div className={styles.container}>
        <h1>Disponível nos seus dispositivos favoritos</h1>
        <div className={styles.devices}>
        {devices && devices.map((item,key)=> (
            <div className={styles.device} key={key}>
                <Image className={styles.img}
                    src={item.img}
                    loader={() => item.img}
                    width={200}
                    height={200}
                    alt=""
                />
                <h2>{item.title}</h2>
                {item.devices.map((item,key) =>(
                    <span key={key}>{item}</span>
                ))}
            </div>   
        ))}
        </div>
    </div>
  )
}
