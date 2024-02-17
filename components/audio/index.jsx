import {useEffect,useRef} from 'react';
import style from "./styles.module.css";

export default function video({ srcObject }) {
  const audioRef = useRef();

  useEffect(() => {
    if (srcObject && audioRef.current) {
      audioRef.current.srcObject = srcObject;
    }
  }, [srcObject]);
  return (<audio autoPlay ref={audioRef} hidden/>)
}
export function VoiceMeter() {
  return (
    <div className={style.soundLevel}>
      <div className={style.levels}>
          <div className={style.level}></div>
      </div>
    </div>
  )
}