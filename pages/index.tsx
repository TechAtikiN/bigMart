import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import UserForm from '../components/UserForm'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {

  const [sales, setSales] = useState(1)
  // useEffect(() => {
  //   console.log(1)
  //   const fetchSales = async () => {
  //     const response = await fetch('http://127.0.0.1:8000/predict')
  //     const data = await response.json()
  //     setSales(data)
  //   }

  //   fetchSales()
  // }, [])

  // console.log(1)
  // console.log(sales)

  return (
    <div>
      <UserForm />
    </div>
  )
}

export default Home
