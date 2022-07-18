import React, { useEffect, useState } from 'react'
import { DayWrap } from '../../assets/css/styles';



const Countdown = () => {
    const [countdownDate, setCountdownDate] = useState(new Date('10/01/2022').getTime());
    const [state, setState] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  
    useEffect(() => {
      setInterval(() => setNewTime(), 1000);
    }, []);
  
    const setNewTime = () => {
      if (countdownDate) {
        const currentTime = new Date().getTime();
  
        const distanceToDate = countdownDate - currentTime;
  
        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        let minutes = Math.floor(
          (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
        );
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
  
        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
          hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
          minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
          seconds = `0${seconds}`;
        }
  
        setState({ days: days, hours: hours, minutes, seconds });
      }
    };
  
  return (
    <div className="container mx-auto px-5 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-2 border-gray-300 rounded-xl py-4 bg-[#fff]">
            <DayWrap>
            <p className='flex justify-center text-3xl'>{state.days || '0'}</p>
            <p className='flex justify-center text-xl'>Days</p>
            </DayWrap>
            </div>
            <div className="border-2 border-gray-300 rounded-xl py-4 bg-[#fff]">
                <DayWrap>
                <p className='flex justify-center text-3xl'>{state.hours || '00'}</p>
                <p className='flex justify-center text-xl' style={{color: '#000'}}>Hours</p>
                </DayWrap>
            </div>
            <div className="border-2 border-gray-300 rounded-xl py-4 bg-[#fff]">
                <DayWrap>
                <p className='flex justify-center text-3xl'>{state.minutes || '00'}</p>
                <p className='flex justify-center text-1xl'>Minutes</p>
                </DayWrap>
            </div>
            <div className="border-2 border-gray-300 rounded-xl py-4 bg-[#fff]">
                <DayWrap>
                <p className='flex justify-center text-3xl'>{state.seconds || '00'}</p>
                <p className='flex justify-center text-1xl'>Second</p>
                </DayWrap>
            </div>
        </div>
    </div>
  )
}

export default Countdown