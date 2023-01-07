import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const CalendarComponent = () => {
  const [ date, setDate ]  = useState(new Date());
  const navigate = useNavigate();

  const handleSetDate = e =>{
     setDate(new Date())
    };

  const handleMonth = e =>{
    navigate('/datas/month')
  }


  const handleChange = e =>{

    //call the api for the data
    setDate(e)
  }
  return (
    <div className='w-full'>
      <Calendar 
      className='w-full'
      onChange={handleChange} 
      value={date}
      onClickMonth={handleMonth}
      />
    </div>
  )
}

export default CalendarComponent;