import { AiOutlineCloseSquare } from 'react-icons/ai';

const Model = ({ HandlePopup }) => {
  return (
    <section className='w-full h-full bg-tb-btn z-40 absolute'>

      <div className='w-full px-4 py-2 flex justify-between items-center'>
        <h5>Name Records</h5>

        <button className='text-primary text-4xl' onClick={HandlePopup}>
          <AiOutlineCloseSquare />
        </button>
      </div>

      <div className='w-10/12 mx-auto bg-blue-300 mt-4'>
        Calendar
      </div>

      <div>
        <h5>Statistics</h5>

        <div className='w-10/12 mx-auto flex justify-between'>

          <div>weekly report</div>

          <div>average latency per week</div>

          <div>total latency for current month</div>

          <div className='bg-white rounded drop-shadow p-4 px-8'>
            <div className='w-full text-start mb-3'>
              <span className='w-5 h-5 inline-block bg-green-500 mr-3'></span>
              <span>Present</span>
            </div>

            <div className='w-full text-start mb-3'>
              <span className='w-5 h-5 inline-block bg-red-500 mr-3'></span>
              <span>Absent</span>
            </div>

            <div className='w-full text-start mb-3'>
              <span className='w-5 h-5 inline-block bg-orange-500 mr-3'></span>
              <span>Late</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Model