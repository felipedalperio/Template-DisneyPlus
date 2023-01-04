import styles from '../styles/Menu.module.scss'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react';

export default function Menu() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const container = useRef(0);
  const logo = useRef(0);
  const button = useRef(0);

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      changeMenu(scrollPosition);
  });

  const changeMenu = (scroll) => {
    if(scroll > 555){
      container.current.style = "background-color: #040714"
      logo.current.style = "opacity: 1"
      button.current.style = "opacity: 1"
    }else{
      container.current.style = "background-color: transparent"
      logo.current.style = "opacity: 0"
      button.current.style = "opacity: 0"
    }
  }

  return (
    <div className={styles.container} ref={container}>
      <div className={styles.logo} ref={logo}>
       <Image 
        src="/images/logo.png"
        width={90}
        height={50}
       />
      </div>
      <div className={styles.buttons}>
        <button ref={button}>ASSINE AGORA</button>
        <button>ENTRAR</button>
      </div>
    </div>
  )
}
