"use client"
import HeaderProfile from "../../../../components/dashboard/headerProfile"
import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import  { AnimeListCollection } from "../../../../components/AnimeListCollection/index"


const Page = () => {
  const router = useParams()
  const user = router.user
  const [data, setData] = useState([])

  const fetchUser = async () => {
    const response = await fetch(`/api/v1/getUsers`, {
      method: "POST",
      body: JSON.stringify({ name: user }),
    })
    const data = await response.json()
    setData(data)
    return data
  }

  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeaderProfile user={user} image={data.image} active={2} />
      <AnimeListCollection user={data} />
    </div>
  )
}

export default Page