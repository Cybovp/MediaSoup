import {useEffect,useRef} from 'react';

export default function video({ srcObject }) {
  const videoRef = useRef();

  useEffect(() => {
    if (srcObject && videoRef.current) {
      videoRef.current.srcObject = srcObject;
    }
  }, [srcObject]);
  return (<video autoPlay ref={videoRef} width='100%' height='100%' muted />)
}