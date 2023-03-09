import Image from 'next/image'

const UserForm = () => {

  return (
    <div className='grid grid-cols-12 h-screen'>

      <div className='col-span-4  bg-white'>
        <div className='p-5'>
          <span className='font-bold text-indigo-800 text-2xl'>Big Mart Sales</span><br></br> <span className='font-semibold text-indigo-800 text-base'>Data Prediction</span>
        </div>
        <div className='flex flex-col space-y-28 items-center'>
          <p className='text-4xl font-bold text-center text-indigo-800 px-10 mt-10'>
            Lorem ipsum dolor consectetu dolor sit, amet ipsum dolor.
          </p>
          <Image
            src='https://img.freepik.com/free-vector/people-analyzing-growth-charts-illustrated_23-2148865274.jpg?w=740&t=st=1678216599~exp=1678217199~hmac=3a083792c28d16460e3f3ed9634d8bbcf14663c00d0c84df34bfb4624da5a381png'
            alt='banner-img'
            height={300}
            width={300}
          />
        </div>


      </div>
      <div className='col-span-8 rounded-l-3xl bg-emerald-300'>

        <form className='p-10' action=''>
          <p className='text-center text-emerald-900 font-semibold text-4xl my-4'> Predict Sales Data for a particular Big Mart outlet based on key features!</p>
          <div className='grid grid-cols-2 gap-x-10 gap-y-5'>
            <div className='space-y-2'>
              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Item Identifier</label>
                <input className='form-input' type='text' />
              </div>

              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Item Weight</label>
                <input className='form-input' type='text' />
              </div>

              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Item Fat Content</label>
                <input className='form-input' type='text' />
              </div>

              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Item Visibility</label>
                <input className='form-input' type='text' />
              </div>

              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Item Type</label>
                <input className='form-input' type='text' />
              </div>

              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Item MRP</label>
                <input className='form-input' type='text' />
              </div>
            </div>

            <div className='space-y-2'>
              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Outlet Identifier</label>
                <input className='form-input' type='text' />
              </div>

              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Outlet Establishment Year</label>
                <input className='form-input' type='text' />
              </div>

              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Outlet Size</label>
                <input className='form-input' type='text' />
              </div>

              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Outlet Location Type</label>
                <input className='form-input' type='text' />
              </div>

              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Outlet Type</label>
                <input className='form-input' type='text' />
              </div>

            </div>
          </div>

          <button className='bg-indigo-800 px-4 py-3 text-xl ml-60 text-white font-semibold rounded-lg mt-10 w-1/2'>
            Predict
          </button>
        </form>

      </div>
    </div>
  )
}

export default UserForm
