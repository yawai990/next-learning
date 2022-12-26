import React from 'react'

const StatisticTable = () => {
  return (
        <table className='w-full min-h-[45px] leading-[45px] bg-tb-btn pb-2'>
        <thead className='border-b border-gray-100'>
          <tr>
          <th className='w-1/12'>No</th>
          <th className='w-2/12'>Student ID</th>
          <th className='w-3/12'>Student's Name</th>
          <th className='w-4/12 '>Attendance Latency</th>
          <th className='w-2/12'>Student's infos</th>
          </tr>
        </thead>
    
        <tbody className="bg-white">
                <tr>
                    <td className='text-center'>1</td>
                    <td className='text-center'>BTA-98</td>
                    <td className='text-center'>Keenan Housbie</td>
                    <td className='text-center'>75%</td>
                    <td className='text-center'>
                        <button className='text-sm underline'>Details</button>
                    </td>
    
                </tr>
        </tbody>
      </table>

  )
}

export default StatisticTable