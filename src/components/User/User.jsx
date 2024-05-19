import {useParams} from 'react-router-dom'

const User = () => {
  const {id}= useParams()
  return (
    <div className='w-[1000px] mx-auto py-2 bg-green-600 text-center
     text-white'> 
     <h1 className=' text-xl font-[600]'>Welcome {id}</h1>
     </div>
  )
}

export default User