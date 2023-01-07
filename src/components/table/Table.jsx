
import { Link } from "react-router-dom";
import './Table.css'

const Table = ({ columnList,data }) => {
 
  return (      
    <div className="overflow-x-scroll">
      <table className='w-full min-h-[45px] leading-[45px] bg-tb-btn pb-2'>
        <thead className='border-b border-gray-100'>
          <tr>
            {
              columnList?.map((col, ind ) => (
                <th className={`min-w-[120px] lg:${col.width}`} key={ind}>{col.columnName}</th>
              ))
            }
          </tr>
        </thead>

        <tbody className="bg-white">
          {
            data.studentData?.map((stu,ind) =>{
              return <tr key={`student-${ind}`} className='border-b'>
              <td className='text-center'>{ind + 1}</td>
              <td className='text-center'>{`BTA-${stu.id}`}</td>
              <td className='text-center'>{stu.name}</td>

              <td className='px-2 py-1 text-center'>
                {
                  stu.status ?  <stu.status.type 
                  className={`px-2 text-sm rounded-lg capitalize flex gap-2 justify-center items-center`}
                  >
                  {
                  stu.status.props.children?.map((btn, ind) => (
                    <btn.type 
                    key={ind} 
                    className={`text-white ${btn.props.bg === stu.status.props.bg ? btn.props.bg :'bg-tb-btn text-black'} px-2 text-sm rounded-lg capitalize`
                    }
                    >
                      {btn.props.children}
                    </btn.type>
                  ))
                  }
                  </stu.status.type>:
                  stu.totallate && 
                  <span className={`${stu.totallate !== 'none' && 'text-red-500'}`}>{stu.totallate}</span>
                }

            
                
              </td>
              {
                stu.latency ?
                <td className='text-center'> {stu.latency} </td>:
                <td className='text-center text-black underline'>
                  <Link to={'/goStuDetailsById'}>Details</Link>
                </td>
              }
            </tr>
})
          }
        </tbody>
      </table>
      </div>
  )
}

export default Table