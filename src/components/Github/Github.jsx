// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"


const Github = () => {
  const data = useLoaderData([])

  // useEffect(() => {
  //   fetch("https://api.github.com/users/Zobayer26").then((res) => res.json()).then((res) => setData(res))

  // }, [])
  console.log(data)
  return (
    <div className="w-full max-w-[800px] mx-auto flex bg-orange-600
       rounded-lg items-start">
      <div className="w-1/2 p-4 bg-cyan-600 rounded-lg">
        <img className="w-full rounded"
          src={data.avatar_url} alt="Profile img" />
      </div>
      <div className="w-1/2 p-4 text-white text-center
      flex flex-col gap-2 ">
        <h1 className="text-2xl font-[600]">{data.name}</h1>
        <p>Followers:{data.followers}</p>
      </div>
    </div>
  )
}

export default Github

