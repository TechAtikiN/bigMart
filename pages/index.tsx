import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import UserForm from '../components/UserForm'

const Home: NextPage = () => {
  return (
    <div>
      <UserForm />
    </div>
  )
}

export default Home
