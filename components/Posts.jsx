import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Posts.module.scss'
import {breve, populares, star} from "../data.js";
import Post from './Post';

export default function Posts() {
  const[list, setList] = useState(breve);
  const option1 = useRef();
  const option2 = useRef();
  const option3 = useRef();

  useEffect(() => {
    option1.current.style = "border-bottom: 5px solid white";
  },[])

  const handleClickOption = (e) => {
    tirarBorda();
    e.target.style = "border-bottom: 5px solid white";
    
    if(e.target.id === "populares"){
      setList(populares)
    }else if(e.target.id === "star"){
      setList(star)
    }else{
      setList(breve)
    }

  }

  const tirarBorda = () => {
    option1.current.style = "border: none"
    option2.current.style = "border: none"
    option3.current.style = "border: none"
  }


  return (
    <div className={styles.container}>
        <div className={styles.options}>
          <span ref={option1} onClick={(e) => handleClickOption(e)} id="breve">EM BREVE</span>
          <span ref={option2} onClick={(e) => handleClickOption(e)} id="populares">MAIS POPULARES</span>
          <span ref={option3} onClick={(e) => handleClickOption(e)} id="star">MAIS NO STAR+</span>
        </div>
        <div className={styles.posts}>
          {list &&
            list.map((item,key) =>(
              <Post props={item} key={key}/>
            ))
          }
        </div>

    </div>
  )
}
