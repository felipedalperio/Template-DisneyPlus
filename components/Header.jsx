import styles from '../styles/Header.module.scss'
import Image from 'next/image'

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image className={styles.imgDisney}
            src="/images/logo.png"
            height={200}
            width={350} 
            alt="imagem"/>
        
        <p>As melhores histórias em um só lugar.</p>

        <div className={styles.groupButtons}>
          <div className={styles.button}>
            <Image className={styles.img}
                src="/images/combo.png"
                height={65}
                width={320} 
                alt="imagem"/>
            <button>ASSINE AGORA</button>
          </div>
          <div className={styles.button}>
            <Image className={styles.img}
                src="/images/disney.png"
                height={65}
                width={400}
                alt="imagem" />
            <button>ASSINE AGORA</button>
          </div>
        </div>
        <div className={styles.links}>
            <a href='#'>Assinar somente o Disney+ mensal</a >
            <a href='#'>Assinar somente o Disney+ anual</a >
        </div>
      </div>
    </div>
  )
}
