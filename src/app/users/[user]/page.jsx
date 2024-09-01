import ProfilePage from "../../../components/dashboard/body"
import { authUserSession } from "../../../libs/auth-libs"
import prisma from "../../../libs/prisma"

const Page = async({params : {user}}) => {
  const {name, image, email} = await authUserSession()
  const collection = await prisma.collection.findMany({
    where: { user_email: email },
  })
  return (
    <div>
      <ProfilePage user={name} image={image} user_email={email} collection={collection} />
    </div>
  )
}

export default Page