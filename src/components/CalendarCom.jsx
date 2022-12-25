import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const CalendarComponent = () => {
  const [ date, setDate ]  = useState(new Date());

  const handleChange = e =>{

    //call the api for the data
    console.log(e)
    setDate(e)
  }
  return (
    <div>
      <Calendar onChange={handleChange} value={date} />
    </div>
  )
}

export default CalendarComponent;