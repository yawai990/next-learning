import Pagination from "./Pagination";
import TableHeadBar from "./TableHeadBar";

const data = {
  "studentData" :[{
    "id": 98,
    "name": "Keenan Housbie",
    "status": 1,
    "latency": "3:29 AM"
  }, {
    "id": 43,
    "name": "Yvor Quinby",
    "status": 3,
    "latency": "10:36 AM"
  }, {
    "id": 22,
    "name": "Ibbie Cottisford",
    "status": 1,
    "latency": "11:45 PM"
  }, {
    "id": 1,
    "name": "Bail Mulhall",
    "status": 3,
    "latency": "7:23 AM"
  }, {
    "id": 97,
    "name": "Vin Blaine",
    "status": 3,
    "latency": "5:29 AM"
  }, {
    "id": 35,
    "name": "Edithe Ray",
    "status": 1,
    "latency": "11:31 PM"
  }, {
    "id": 75,
    "name": "Corrie Grinyer",
    "status": 1,
    "latency": "3:52 PM"
  }, {
    "id": 90,
    "name": "Cyndi Vequaud",
    "status": 3,
    "latency": "4:44 AM"
  }, {
    "id": 95,
    "name": "Celene Matyashev",
    "status": 1,
    "latency": "8:41 AM"
  },{
    "id": 63,
    "name": "Serene Bulpitt",
    "status": 2,
    "latency": "4:58 AM"
  }],
  "cur_page" : 1,
  "pagination" : 3,
}

const Table = () => {
  
  return (   
     <div className='w-full h-5/6 bg-white'>

       <TableHeadBar />

      <table className='w-full min-h-[45px] leading-[45px] bg-[#D0CDCC] pb-2'>
        <thead className='border-b border-gray-100'>
          <tr>
          <th className='w-1/12'>No</th>
          <th className='w-2/12'>Student ID</th>
          <th className='w-3/12'>Student's Name</th>
          <th className='w-4/12 '>Status</th>
          <th className='w-2/12'>Latency</th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {
            data.studentData?.map((stu,ind) =>(
              <tr key={`student-${ind}`} className='border-b'>
              <td className='text-center'>{ind + 1}</td>
              <td className='text-center'>{`BTA-${stu.id}`}</td>
              <td className='text-center'>{stu.name}</td>

              <td className='px-2 py-1 flex justify-center items-center gap-3'>
                <button className={`${stu.status === 1 ? 'bg-green-600 text-white':'bg-tb-btn'} px-2 rounded-lg capitalize`}>present</button>
                <button className={`${stu.status === 2 ? 'bg-red-600 text-white':'bg-tb-btn'} px-2 rounded-lg capitalize`}>absent</button>
                <button className={`${stu.status === 3 ? 'bg-orange-600 text-white':'bg-tb-btn'} px-2 rounded-lg capitalize`}>late</button>

              </td>
              <td className='text-center'> {stu.latency} </td>
            </tr>
            ))
          }
        </tbody>
      </table>

      <Pagination />
    </div>
  )
}

export default Table