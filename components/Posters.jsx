import styles from '../styles/Poster.module.scss'
import Image from 'next/image'
import {posters} from '../data.js'

export default function Posters() {
  return (
    <div className={styles.container}>
      {posters && posters.map((item, key) => (
        <div className={styles.poster} key={key}>
            <div className={styles.left}>
              {item.img && (
                <Image className={styles.img}
                  loader={() => item.img}
                  src={item.img}
                  height={300}
                  width={300}
                  alt="" />
              )}
            </div>
            <div className={styles.right}>
                <h1>{item.title}</h1>
                <span>{item.desc}</span>
            </div>
        </div>
      ))}
    </div>
  )
}
