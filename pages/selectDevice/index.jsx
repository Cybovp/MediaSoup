import { useEffect, useState, useRef } from "react"
import { Button } from "react-bootstrap"
import style from "./styles.module.css"
import Select from "react-select";
import { useRouter } from 'next/navigation';
import Video from '@/components/video';
import Audio from '@/components/audio';
import * as Yup from "yup";

const selectDevice = ({roomId}) => {
    const [audioDevices, setAudioDevices] = useState();
	const [videoDevices, setVideoDevices] = useState();
    const [configData, setConfigData] = useState({
        roomId: roomId
    });
    const [errors, setErrors] = useState({});
    const [currentTime, setCurrentTime] = useState();
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const [showDevicesTesting, setShowDevicesTesting] = useState(false);
    const [testStream, setTestStream] = useState();
    const [testAudioVolume, setTestAudioVolume] = useState(0);
    const router = useRouter();
    const deviceTestButtonRef = useRef(null);
    const customStyles = {
        control: (provided) => ({
          ...provided,
          border: '2px solid #000', // Customize the border
        }),
    };
    const validationSchema = Yup.object().shape({
        roomId: Yup.string().required("Vui lòng nhập ID phòng họp"),
        name: Yup.string().required("Vui lòng nhập tên"),
        video: Yup.string().required("Vui lòng chọn thiết bị camera"),
        audio: Yup.string().required("Vui lòng chọn thiết bị microphone"),
    });
    useEffect(()=>{
        const initDevices = async () => {
            const testStream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: {
                    width: { min: 640, max: 1920 },
                    height: { min: 400, max: 1080 },
                },
            });
            testStream.getTracks().forEach(track => {
                track.stop();
            });
            const devices = await navigator.mediaDevices.enumerateDevices();
            if(devices.length > 0){
                const videoDevices = devices.filter(
                    (device) => device.kind === 'videoinput' && device.deviceId !== ''
                );
                const audioDevices = devices.filter(
                    (device) => device.kind === 'audioinput' && device.deviceId !== ''
                );
                setVideoDevices(videoDevices)
                setAudioDevices(audioDevices)
            }
        }
        initDevices()
        const intervalId = setInterval(() => {
            let datenow = new Date();
            const formattedTime = datenow.toLocaleTimeString('vn-VN', {
                hour12: false, // Use 24-hour format
              }).slice(0, -3);
            
            const formattedDate = datenow.toLocaleDateString('vn-VN', {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
            });
            setCurrentTime(`${formattedTime} • ${formattedDate}`);
        }, 1000);
        document.addEventListener('mousemove', (event) => {
            setMouseX(event.clientX);
            setMouseY(event.clientY);
        });
        return () => clearInterval(intervalId);
    },[]);
    useEffect(() => {
        if(videoDevices && videoDevices.length > 0 && audioDevices && audioDevices.length > 0){
            setConfigData(prev=>({
                ...prev,
                video: videoDevices[0].deviceId,
                audio: audioDevices[0].deviceId,
            }))
        }
    },[videoDevices,audioDevices])
    const videoDevicesOptions = videoDevices && videoDevices.length > 0 && videoDevices?.map(opt => ({
        label: opt.label,
        value: opt.deviceId
    }))
    const audioDevicesOptions = audioDevices && audioDevices.length > 0 && audioDevices?.map(opt => ({
        label: opt.label,
        value: opt.deviceId
    }))
    return (
        <div className={style.container}>
            <div style={{
                position: 'absolute',
                left: `${mouseX}px`,
                top: `${mouseY-500}px`,
                pointerEvents: 'none',
                display: showDevicesTesting ? 'block' : 'none',
                // display: 'block',
                zIndex:'9999',
            }}>
                <div className={style.deviceTestArea}> 
                    <Video srcObject={testStream} flip></Video>
                    <Audio srcObject={testStream} flip></Audio>
                    <div className={style.meterArea}>
                        <span style={{marginRight: '5px'}} className="material-symbols-outlined">volume_up</span>
                        <meter className={style.meter} max={1.0} min={0.0} value={testAudioVolume} high={.75} low={.25} optimum={0.5} ></meter>
                    </div>
                    {/* <div className={style.soundLevel}>
                        <div className={style.levels}>
                            <div className={style.level}></div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className={style.headerContainer}>
                <header className={style.header}>
                    <div className={style.headerChild}>
                        <div className={style.logoContainer}>
                            <div className={style.logoParrent}>
                                <div className={style.logoChild}>
                                    <div className={style.logo}>
                                        <img className={style.logoImage} src={'https://hungha365.com/favicon/HH365.ico'}></img>
                                        <span className={style.logoText}>Meeting365</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.dateContainer}>
                            <div className={style.dateParrent}>
                                <div className={style.dateChild}>
                                    <div className={style.date}>
                                        {currentTime}
                                    </div>
                                </div>
                                <div className={style.dateChild}>
                                    <div className={style.headerIcon}>
                                        <div className={style.headerIconChild}>
                                            <div>
                                                <div className={style.headerIconChildDetail}>
                                                    <div>
                                                        <span>
                                                            <button className={style.headerIconFirstChild}>
                                                                <span className="material-symbols-outlined">
                                                                    help
                                                                </span>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={style.headerIconChildDetail}>
                                                    <div>
                                                        <span>
                                                            <button className={style.headerIconSecondChild}>
                                                                <span className="material-symbols-outlined">
                                                                    chat_info
                                                                </span>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className={style.headerIconChildDetail}>
                                                    <div>
                                                        <span>
                                                            <button className={style.headerIconThirdChild}>
                                                                <span className="material-symbols-outlined">
                                                                    settings
                                                                </span>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <div className={style.form_container}>
                <div className={style.input}>
                    <label style={{display: 'flex',fontWeight: 'bold', marginBottom: '5px'}}>
                        <span style={{marginRight: '5px'}} className="material-symbols-outlined">badge</span>
                        Tên của bạn 
                        <span style={{color: 'red'}}>*</span>
                    </label>
                    <input placeholder="  Hãy điền tên của bạn" style={{width: '100%'}} className={style.input_text} type="text" 
                        onChange={(e) => 
                            setConfigData((prev)=>({
                                ...prev,
                                name: e.target.value,
                            }))}>
                    </input>
                    {errors.name && (
                        <p style={{ color: "red", margin: "10px 10px 0 0" }}>
                        {errors.name}
                        </p>
                    )}
                </div>
                <div className={style.input}>
                    <label style={{display: 'flex',fontWeight: 'bold', marginBottom: '5px'}}>
                        <span style={{marginRight: '5px'}} className="material-symbols-outlined">videocam</span>
                        Thiết bị camera 
                        <span style={{color: 'red'}}>*</span>
                    </label>
                    {videoDevicesOptions ? <Select 
                        options={videoDevicesOptions}
                        placeholder={'Hãy chọn Camera'}
                        styles={customStyles}
                        onChange={(e)=>{
                            setConfigData((prev)=>({
                                ...prev,
                                video: e.value,
                            }))
                        }}
                        defaultValue={videoDevicesOptions[0]}
                    /> : <span className={style.loader}></span>}
                    {errors.video && (
                        <p style={{ color: "red", margin: "10px 10px 0 0" }}>
                        {errors.video}
                        </p>
                    )}
                </div>
                <div className={style.input}>
                    <label style={{display: 'flex',fontWeight: 'bold', marginBottom: '5px'}}>
                        <span style={{marginRight: '5px'}} className="material-symbols-outlined">mic</span>
                        Thiết bị microphone 
                        <span style={{color: 'red'}}>*</span>
                    </label>
                    {audioDevicesOptions ? <Select 
                        options={audioDevicesOptions}
                        placeholder={'Hãy chọn Micro'}
                        styles={customStyles}
                        onChange={(e)=>{
                            setConfigData((prev)=>({
                                ...prev,
                                audio: e.value,
                            }))
                        }}
                        defaultValue={audioDevicesOptions[0]}
                    /> : <span className={style.loader}></span>}
                    {errors.audio && (
                        <p style={{ color: "red", margin: "10px 10px 0 0" }}>
                        {errors.audio}
                        </p>
                    )}
                </div>
                <div className={style.input}>
                    <label style={{display: 'flex',fontWeight: 'bold', marginBottom: '5px'}}>
                        <span style={{marginRight: '5px'}} className="material-symbols-outlined">account_circle</span>
                        Avatar ( link Google )
                    </label>
                    <input style={{width: '100%'}} className={style.input_text} type="text" 
                        onChange={(e) => 
                            setConfigData((prev)=>({
                                ...prev,
                                avatar: e.target.value,
                            }))
                        }>
                    </input>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    width: '100%',
                }} className={style.buttonArea}>
                    <div ref={deviceTestButtonRef} className={style.button} style={{textDecoration: 'none'}} 
                        onClick={async ()=>{
                            setShowDevicesTesting(true);
                            const test = async () => {
                                const stream = await navigator.mediaDevices.getUserMedia({
                                    audio: { deviceId: { exact: configData.audio }},
                                    video: {
                                        width: { min: 640, max: 1920 },
                                        height: { min: 400, max: 1080 },
                                        deviceId: { exact: configData.video }
                                    },
                                });
                                setTestStream(stream);
                                const audioCtx = new AudioContext();
                                const scriptProcessor = audioCtx.createScriptProcessor(4096, 1, 1); // Adjust buffer size (2^n) as needed
                                const mic = audioCtx.createMediaStreamSource(stream);
                                mic.connect(scriptProcessor);
                                scriptProcessor.connect(audioCtx.destination);
                                scriptProcessor.onaudioprocess = (event) => {
                                    const inputBuffer = event.inputBuffer;
                                    const data = inputBuffer.getChannelData(0); // Get first channel data
                                
                                    // Calculate root mean square (RMS) to estimate volume
                                    let rms = 0;
                                    for (let i = 0; i < data.length; i++) {
                                    rms += data[i] * data[i];
                                    }
                                    rms = Math.sqrt(rms / data.length);
                                
                                    // Normalize and process the volume value (0-1)
                                    const volume = Math.min(rms, 1);
                                
                                    // Use the volume value for your application (e.g., display, visualization)
                                    setTestAudioVolume(volume);
                                };              
                            };
                            test();
                        }} 
                        onMouseLeave={async ()=>{
                            if(testStream){
                                await testStream.getTracks().forEach(track => {
                                    track.stop();
                                });
                                setShowDevicesTesting(false);
                            }
                        }}>
                        Kiểm tra thiết bị
                    </div>
                    <div className={style.button} style={{textDecoration: 'none'}} 
                        onClick={async ()=>{
                            try{
                                await validationSchema.validate(configData, { abortEarly: false });
                                window.location.href = configData.avatar 
                                ? `/meetingRoom?room=${configData.roomId}&name=${configData.name}&video=${configData.video}&audio=${configData.audio}&avatar=${configData.avatar}`
                                : `/meetingRoom?room=${configData.roomId}&name=${configData.name}&video=${configData.video}&audio=${configData.audio}`
                            }catch(error){
                                const newErrors = {};
                                if (error?.inner) {
                                    error.inner.forEach((err) => {
                                        newErrors[err.path] = err.message;
                                    });
                                }
                                setErrors(newErrors);
                            }
                        }}
                        >
                        Tham gia ngay
                    </div>
                </div>
                
            </div>
        </div>
    )
}
selectDevice.getInitialProps = async (ctx) => {
    const { roomId } = ctx.query;
    return {
        roomId
    }
}
export default selectDevice