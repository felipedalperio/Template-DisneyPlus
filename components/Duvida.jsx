import styles from '../styles/Duvida.module.scss';
import { AiOutlinePlus,AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';

export default function Duvida({props}) {
  const[show,setShow] = useState(false);
  
  return (
    <div className={styles.container}>
        <div className={styles.intro}>
            <h1>{props.title}</h1>
            {!show 
                ? (<AiOutlinePlus className={styles.icon} onClick={() => setShow(!show)}/>)
                : (<AiOutlineClose className={styles.icon} onClick={() => setShow(!show)}/>)
            }
            
        </div>
        <div className={styles.list} style={show ? {maxHeight:'800px', padding:'10px 0'} : {maxHeight:'0', padding:'0'}}> 
            <span>{props.title2}</span>
            {props.items.length > 0 && (
                <ul>
                    {props.items.map((item,key) =>(
                        <li key={key}>{item}</li>
                    ))}
                </ul>
            )}
            <span>{props.span}</span>
        </div>
    </div>
  )
}
