import ProfilePage from "../../../components/dashboard/body"
import { authUserSession } from "../../../libs/auth-libs"
import prisma from "../../../libs/prisma"
import HeaderProfile from "../../../components/dashboard/headerProfile"

const Page = async() => {
  const {name, image, email} = await authUserSession()
  const users = await prisma?.user.findUnique({
    where: { email: email },
    include: { collections: true }
  })
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeaderProfile user={name} image={image} active={1} />
      <ProfilePage user={name} image={image} user_email={email} collections={users.collections} />
    </div>
  )
}

export default Page