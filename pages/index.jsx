import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import style from "./styles.module.css"
import Select from "react-select";

const HomePage = () => {
    const [roomId, setRoonId] = useState(null);
    const router = useRouter();
    const [audioDevices, setAudioDevices] = useState([]);
	const [videoDevices, setVideoDevices] = useState([]);
    const [configData, setConfigData] = useState({});
    const customStyles = {
        control: (provided) => ({
          ...provided,
          border: '2px solid #000', // Customize the border
        }),
    };
    useEffect(()=>{
        const initDevices = async () => {
            const devices = await navigator.mediaDevices.enumerateDevices();
            const videoDevices = devices.filter(
                (device) => device.kind === 'videoinput' && device.deviceId !== ''
            );
            const audioDevices = devices.filter(
                (device) => device.kind === 'audioinput' && device.deviceId !== ''
            );
            setVideoDevices(videoDevices)
            setAudioDevices(audioDevices)
        }
        initDevices()
    },[]);
    return (
        <div className={style.container}>
            <div className={style.form_container}>
                <div className={style.input}>
                    <label style={{display: 'block'}}>Please Enter Room's Id:</label>
                    <input style={{width: '100%'}} className={style.input_text} type="text" onChange={(e) => setRoonId(e.target.value)}></input>
                </div>
                <div className={style.input}>
                    <label style={{display: 'block'}}>Please Enter your name:</label>
                    <input style={{width: '100%'}} className={style.input_text} type="text" 
                        onChange={(e) => 
                            setConfigData((prev)=>({
                                ...prev,
                                name: e.target.value,
                            }))}>
                    </input>
                </div>
                <div className={style.input}>
                    <label style={{display: 'block'}}>Please Select your camera:</label>
                    {videoDevices && <Select 
                        options={videoDevices.map(opt => ({
                            label: opt.label,
                            value: opt.deviceId
                        }))}
                        placeholder={'Choose Camera'}
                        styles={customStyles}
                        onChange={(e)=>{
                            setConfigData((prev)=>({
                                ...prev,
                                video: e.value,
                            }))
                        }}
                    />}
                </div>
                <div className={style.input}>
                    <label style={{display: 'block'}}>Please Select your micro:</label>
                    {audioDevices && <Select 
                        options={audioDevices.map(opt => ({
                            label: opt.label,
                            value: opt.deviceId
                        }))}
                        placeholder={'Choose Micro'}
                        styles={customStyles}
                        onChange={(e)=>{
                            setConfigData((prev)=>({
                                ...prev,
                                audio: e.value,
                            }))
                        }}
                    />}
                </div>
                <div className={style.button}>
                    <a style={{color: '#000'}} href={`/meetingRoom?room=${roomId}&name=${configData.name}&video=${configData.video}&audio=${configData.audio}`}>Enter</a>
                </div>
            </div>
        </div>
    )
}

export default HomePage