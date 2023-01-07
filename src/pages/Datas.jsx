import { useState } from 'react';
import AppWrap from '../HOC/HOC';
import CalendarComponent from '../components/CalendarCom';
import DataTable from '../components/table';
import PieChartCom from '../components/chart/PieChart';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import Model from '../components/Model/Model';

const classData = [
  'grade 11', 'grade 10', 'grade 9', 'grade 8', 'grade 7', 'grade 6', 'grade 5'
]

const Datas = () => {
  const { pathname } = useLocation();
  const [ showPopup, setShowPopup ] = useState(false); //to do

  const HandlePopup = () => setShowPopup(!showPopup)


  return (
    <section className='w-10/12 mx-auto mb-5 relative overflow-x-hidden'>

      {
        showPopup && <Model HandlePopup={HandlePopup} />
      }

      <div className='my-4'>

            {/* <div className='w-2/6 flex items-center'> */}
        {/* <button className='sharp-btn bg-primary text-white text-start py-1 pl-1 pr-3 rounded-r-3xl'>datas</button> */}

         {/* {
          (pathname === '/datas/today' || pathname === '/datas/today/statis') && <>
        <span className='text-3xl text-primary'>
          <MdKeyboardArrowRight />
        </span>
        <button className='sharp-btn bg-primary text-white text-start py-1 pl-1 pr-3 rounded-r-3xl'>Today</button>
        </>
         } */}

         {/* {
         pathname === '/datas/today/statis' && <>
        <span className='text-3xl text-primary'>
          <MdKeyboardArrowRight />
        </span>
        <button className='sharp-btn bg-primary text-white text-start py-1 pl-1 pr-3 rounded-r-3xl'>Attendance Statistics</button>
          </>
         } */}

      {/* </div> */}

      </div> 

      <div className='w-full lg:flex'>

        <div className='w-full lg:w-3/12 lg:pr-4 mb-5'>

          <CalendarComponent />

          <div className="w-full mt-5">

          <select name="class" id="" 
          defaultValue={'DEFAULT'}
          className='w-full h-full block p-2 rounded outline-none capitalize'> 
          <option value='DEFAULT' disabled>Class</option>

          {
            classData?.map((data,ind) =>(
              <option value={ind + 1} 
              key={ind} 
              disabled={data === 'class' && true}
              className='capitalize'
              >{data}</option>
            ))
          }

          </select>

          {
            pathname === '/datas/month' && 
          <PieChartCom />
          }
          </div>
        </div>

        <DataTable pathname={pathname} />

        
      </div>
    </section>
  )
}

export default AppWrap(Datas);