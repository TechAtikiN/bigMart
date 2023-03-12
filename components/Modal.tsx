import { useRouter } from "next/router"

interface Props {
  sales: number
}
const Modal = ({ sales }: Props) => {
  const router = useRouter()
  return (
    <div className='h-[20rem] w-1/2 text-center bg-white opacity-90 p-10 ml-96  top-10  fixed'>
      <p className='text-3xl font-bold z-30'>The sales prediction for the big mart franchise with below inputs is ${sales}</p>
      <button onClick={() => router.reload()} className='px-4 py-3 bg-green-900 z-30 text-white rounded-full hover:bg-emerald-700 w-1/4 mt-10'>Close</button>
    </div>
  )
}

export default Modal
