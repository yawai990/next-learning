import AppWrap from '../HOC/HOC';
import { useNavigate } from 'react-router-dom';
import * as api from '../api';


const GenerateQR = () => {
  const navigate = useNavigate();
  
  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    const elements = e.currentTarget.elements;

    const name = elements.name.value;
    const role = elements.role.value;
    const classId = elements.classId.value;
    const studentId = elements.studentId.value;

    //to do 
    const generateQRData = {
      name,
      role,
      studentId,
      classId
    };

    api.GenerateQR(generateQRData)
    .then(resp => {
      console.log(resp)
      navigate('/qr_generated')
    })
    .catch(err => console.log(err))

    //to do : before navigate to the generated QR, send the data to the backend
    elements.stu_name.value ='';
    elements.stu_email.value ='';
    elements.stu_class.value ='';
    elements.stu_attendance_id.value = '';

  };

  return (
    <>
 
      <div className='w-full mt-5'>

        <form action="" className='w-2/6 m-auto p-4w' onSubmit={handleSubmit}>

            <div className='mb-3'>
              <label htmlFor="name" className='block mb-1'>Student's Name</label>
              <input type="text" 
              name='name'
              className='w-full p-1 rounded outline-none border block bg-transparent border-primary placeholder:text-[#827272] py-2'
              placeholder="Add studend's name" />
            </div>

            <div className='mb-3'>
              <label htmlFor="role" className='block mb-1'>Role</label>
              <select name="role" id="role" defaultValue={'0'} 
              className='w-full p-1 rounded outline-none border block bg-transparent border-primary py-2' 
              >
                <option value="0" disabled>Role</option>
                <option value="student">Student</option>
                <option value="staff">Staff</option>
              </select>
            </div>

            <div className='mb-3 flex justify-between items-center gap-4'>

              <div className='w-3/6'>
              <label htmlFor="classId" className='block mb-1'>Class</label>
              <input type="text" 
              name='stu_class'
              className='w-full p-1 rounded outline-none border block bg-transparent border-primary placeholder:text-[#827272] py-2'
              placeholder="Add class ID" />
              </div>

              <div className='w-3/6'>
              <label htmlFor="studentId" className='block mb-1'>ID</label>
              <input type="text" 
              name='stu_attendance_id'
              className='w-full p-1 rounded outline-none border block bg-transparent border-primary placeholder:text-[#827272] py-2'
              placeholder="Add Attendance ID" />
              </div>

            </div>

            <div className='flex justify-center items-center flex-col'>

            <h4 className='font-semibold'>Generate a QR Code</h4>

            <div className='my-2'>
              <img src="/img/downarrow.svg" alt="" className='h-8' />
            </div>

            <button className='w-16 h-16 block rounded-full text-white bg-primary font-semibold'>Start</button>
            </div>
          
          </form>  
      </div>

     
      
    </>
  )
}

export default AppWrap(GenerateQR);