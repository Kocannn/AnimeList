import ProfilePage from "../../../components/dashboard/body"
import prisma from "../../../libs/prisma"
import HeaderProfile from "../../../components/dashboard/headerProfile"
import { authUserSession } from "../../../libs/auth-libs"


const Page = async({params: {user}}) => {
  const {name} = await authUserSession()
  const dayRange = 143;
  const today = new Date();
  const pastDate = new Date();
  pastDate.setDate(today.getDate() - dayRange);
  const users = await prisma?.user.findUnique({
    where: { name: user },
    include: {
     collections: true,
     forumPosts: {
      orderBy: {
        createdAt: "desc",
      }
     },
     ratings: true,
     comments: true,
     activities:{
      where:{
        createdAt:{
          gte: pastDate,
          lte: today
        }
      },
      select:{
        createdAt: true
      }
     }
    }
  })
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeaderProfile params={user} user={users.name} image={users.image} login={name} active={1} />
      <ProfilePage userId={users.id} users={users}  collections={users.collections} />
    </div>
  )
}

export default Page