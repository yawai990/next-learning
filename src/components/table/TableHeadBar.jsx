import { AiOutlineSearch } from 'react-icons/ai';

const TableHeadBar = () => {
  return (
    <section className='w-full h-12 bg-primary px-4 text-white flex justify-between items-center'>

        <div className='p-1 bg-white text-black rounded-2xl flex gap-1 items-center'>

            <button className='active bg-primary rounded-2xl text-white px-2'>Students</button>
            <button className='hover:bg-primary hover:text-white px-2 rounded-2xl'>Staffs</button>
        </div>

        <div>
          <p>Today, March 22nd 2022</p>
        </div>

        <div className='min-w-[250px] bg-white rounded flex items-center flex-row-reverse px-1'>
          <input type="text" className='h-full block p-2 flex-1 outline-none text-gray-700' placeholder='Search' />

          <button className='p-2 block text-black text-lg'>
            <AiOutlineSearch />
          </button>
        </div>
    </section>
  )
}

export default TableHeadBar