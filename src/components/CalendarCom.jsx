import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const CalendarComponent = () => {
  const [ date, setDate ]  = useState();
  const navigate = useNavigate();

  const handleChange = e =>{

    //call the api for the data
    console.log(e)
    setDate(e)
    navigate('/datas/today')
  }
  return (
    <div>
      <Calendar onChange={handleChange} value={date} />
    </div>
  )
}

export default CalendarComponent;