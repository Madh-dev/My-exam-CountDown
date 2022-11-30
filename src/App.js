
import { useEffect, useState } from 'react';
import './App.css';
import Clock from './Component/Clock';
import Footer from './Component/Footer';
import Header from './Component/Header';

function App() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;
  const startTimer = ()=>{
    const countDownDate = new Date("Dec 12,2022").getTime();
    interval = setInterval (()=>{
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance  / (24*60*60*1000));
      const hours = Math.floor(distance  % (24 * 60 * 60 * 1000) / (1000 * 60 * 60));
      const minutes = Math.floor(distance  % ( 60 * 60 * 1000) / (1000 * 60));
      const seconds = Math.floor(distance  % (60 * 1000) / (1000));
      if(distance < 0){
        // stop Timer
        clearInterval(interval.current);
      }else{
        // updating the timer
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);

      }
    })
  };
  useEffect(()=>{
    startTimer();
  });

  
  return (
    <div className='App'>
            <Header />
            <Clock  days={days} hours={hours} minutes={minutes} seconds={seconds}  />
            <Footer />
    </div>

  );
}

export default App;
