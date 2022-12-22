import React,{ useState,useEffect} from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import "./Hero.css";
import {IoMdMail} from 'react-icons/io'
import Donut from "./Donut";
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Hero = () => {
  const [open, setOpen] = React.useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Software Developer", "Computer Science" ];

  const period = 2000;
  useEffect(() => {
    AOS.init();
  }, [])
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }





  return (
    <div id="hero">
      <div className="hero-container" >
      <div className="type">
        <span className="textOne" data-aos="fade-up"  data-aos-duration="2000" data-aos-delay="50">Hi, my name is</span>
        <Typist avgTypingDelay={120} className="textTwo">
        Carl Joseph Marasigan
        </Typist>
        <h2><span className="textThree" dataPeriod="1000" data-rotate='[ "Web Developer", "Software Developer", "Computer Science" ]'><span className="wrap">{text}</span></span></h2>
  
      </div>
      
      <Box sx={{ width: '100%' }} data-aos="fade-up"  data-aos-duration="2000" data-aos-delay="50">
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(!open);
              }}
              sx={{backgroundColor: 'red'}}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2, backgroundColor: "#ccd6f6",color:"#0a192f",fontFamily:'NTR',fontSize:'1.5rem' }}
        >
          email me: marasigancarljoseph@gmail.com
        </Alert>
      </Collapse>
      <button className='btnmore'    onClick={() => {
          setOpen(!open);
        }}   ><IoMdMail className="mail"/>Contact Me!</button>
      </Box>
      </div>
      <div className="donut" data-aos="fade-up"  data-aos-duration="2000">
      <Donut/>
     
      </div>
    </div>
  );
};

export default Hero;
