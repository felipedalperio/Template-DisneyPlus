import styles from '../styles/Post.module.scss'
import Image from 'next/image'

export default function Post({props}) {
  return (
    <div className={styles.container}>
        <Image className={styles.img}
            src={props.img}
            loader={() => props.img}
            height={300}
            width={300}
        />
    </div>
  )
}
