import React from 'react';
import AppWrap from '../HOC/HOC';
import CalendarComponent from '../components/CalendarCom';
import DataTable from '../components/table/DataTable';
import PieChartCom from '../components/chart/PieChart';

const classData = [
  'grade 11', 'grade 10', 'grade 9', 'grade 8', 'grade 7', 'grade 6', 'grade 5'
]

const Datas = () => {
  return (
    <section className='w-10/12 mx-auto overflow-x-hidden mb-5'>
      <div>button</div>

      <div className='md:flex w-full'>
        <div className='w-full md:w-3/12 md:pr-4'>
          <CalendarComponent />

          <div className="w-full mt-5">

          <select name="class" id="" 
          defaultValue={0}
          className='w-full h-full block p-2 rounded outline-none capitalize'> 
          {/* <option selected>Class</option> */}

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

          <button className="block rounded w-full bg-primary text-white py-2 mt-5">2</button>

          <PieChartCom />
          </div>
        </div>

        <DataTable />

        
      </div>
    </section>
  )
}

export default AppWrap(Datas);