import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import UserForm from '../components/Modal'
import { FormEvent, useEffect, useState } from 'react'
import Modal from '../components/Modal'

const Home: NextPage = () => {

  const [sales, setSales] = useState(0)

  const [Item_Identifier, setItemIdentifier] = useState('0')
  const [Item_Weight, setItemWeight] = useState('0')
  const [Item_Fat_Content, setItemFatContent] = useState('0')
  const [Item_Visibility, setItemVisibility] = useState('0')
  const [Item_Type, setItemType] = useState('0')
  const [Item_MRP, setItemMRP] = useState('0')
  const [Outlet_Identifier, setOutletIdentifier] = useState('0')
  const [Outlet_Establishment_Year, setOutletEstbalishmentYear] = useState('0')
  const [Outlet_Size, setOutletSize] = useState('0')
  const [Outlet_Location_Type, setOutletLocationType] = useState('0')
  const [Outlet_Type, setOutletType] = useState('0')

  // useEffect(() => {
  const postData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const reqBody = {
      Item_Identifier,
      Item_Weight,
      Item_Fat_Content,
      Item_Visibility,
      Item_Type,
      Item_MRP,
      Outlet_Identifier,
      Outlet_Establishment_Year,
      Outlet_Size,
      Outlet_Location_Type,
      Outlet_Type
    }
    try {
      const response = await fetch('http://127.0.0.1:8000/predict',
        {
          method: 'POST',
          body: JSON.stringify(reqBody),
          headers: {
            'Content-type': 'application/json'
          }
        })
      const data = await response.json()
      setSales(data)
    }
    catch (err) {
      console.log(err)
    }
  }
  console.log(sales)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // e.preventDefault()
    postData(e)
  }

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
      <div className={`col-span-8 rounded-l-3xl ${sales !== 0 ? 'bg-black opacity-50' : 'bg-emerald-300'}`}>

        <form onSubmit={(e) => handleSubmit(e)} className='p-10' action=''>
          <p className='text-center text-emerald-900 font-semibold text-4xl my-4'> Predict Sales Data for a particular Big Mart outlet based on key features!</p>
          <div className='grid grid-cols-2 gap-x-10 gap-y-5'>
            <div className='space-y-2'>
              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Item Identifier</label>
                <input onChange={(e) => setItemIdentifier(e.target.value)} className='form-input' type='text' />
              </div>

              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Item Weight</label>
                <input onChange={(e) => setItemWeight(e.target.value)} className='form-input' type='text' />
              </div>

              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Item Fat Content</label>
                <input onChange={(e) => setItemFatContent(e.target.value)} className='form-input' type='text' />
              </div>

              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Item Visibility</label>
                <input onChange={(e) => setItemVisibility(e.target.value)} className='form-input' type='text' />
              </div>

              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Item Type</label>
                <input onChange={(e) => setItemType(e.target.value)} className='form-input' type='text' />
              </div>

              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Item MRP</label>
                <input onChange={(e) => setItemMRP(e.target.value)} className='form-input' type='text' />
              </div>
            </div>

            <div className='space-y-2'>
              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Outlet Identifier</label>
                <input onChange={(e) => setOutletIdentifier(e.target.value)} className='form-input' type='text' />
              </div>

              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Outlet Establishment Year</label>
                <input onChange={(e) => setOutletEstbalishmentYear(e.target.value)} className='form-input' type='text' />
              </div>

              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Outlet Size</label>
                <input onChange={(e) => setOutletSize(e.target.value)} className='form-input' type='text' />
              </div>

              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Outlet Location Type</label>
                <input onChange={(e) => setOutletLocationType(e.target.value)} className='form-input' type='text' />
              </div>

              <div className='flex flex-col'>
                <label className='form-label' htmlFor=''>Outlet Type</label>
                <input onChange={(e) => setOutletType(e.target.value)} className='form-input' type='text' />
              </div>

            </div>
          </div>

          <button type='submit' className='bg-indigo-800 px-4 py-3 text-xl ml-60 text-white font-semibold rounded-lg mt-10 w-1/2'>
            Predict
          </button>
        </form>
      </div>

      {sales && <Modal sales={sales} />}
    </div>
  )
}

export default Home
