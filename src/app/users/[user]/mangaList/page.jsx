import HeaderProfile from "../../../../components/dashboard/headerProfile"
import { authUserSession } from "../../../../libs/auth-libs"
import prisma from "../../../../libs/prisma"
const Page = async() => {
  const {name, image, email} = await authUserSession()
  const collection = await prisma.collection.findMany({
    where: { userId: email },
  })
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeaderProfile user={name} image={image} active={3} />
    </div>
  )
}

export default Page