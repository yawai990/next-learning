import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const CalendarComponent = () => {
  const [ date, setDate ]  = useState();
  const navigate = useNavigate();

  const handleSetDate = e =>{
     setDate(new Date())
     navigate('/datas/today')
    };


  const handleChange = e =>{

    //call the api for the data
    setDate(e)
    navigate('/datas/today')
  }
  return (
    <div>
      <button 
      className='text-sm bg-primary rounded-r-full text-white py-1 px-2 mb-2 capitalize'
      onClick={handleSetDate}
      >go today</button>
      <Calendar onChange={handleChange} value={date} />

    </div>
  )
}

export default CalendarComponent;