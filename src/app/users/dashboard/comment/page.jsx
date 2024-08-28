import  prisma from "../../../../libs/prisma"
import { authUserSession } from "../../../../libs/auth-libs"
import Link from "next/link"
import Header from "../../../../components/dashboard/header"
import { formatDistanceToNow } from "date-fns"
const Page = async() => {
    const user = await authUserSession()
    const comments = await prisma.comment.findMany({where: {user_email: user.email}, orderBy:{created_at: 'desc'} })
    return (
        <section className="mt-4 px-4 w-full">
            <Header title={"My Comment"}/>
            <div className="grid grid-cols-1 gap-4">
                { comments.length > 0 ? comments.map(comment => {
                    return(
                        <Link href={`/${comment.type}/${comment.anime_mal_id}`} key={comment.id} className="bg-color-primary text-color-dark p-4 rounded">
                            <p className="text-sm">{comment.anime_title} - {formatDistanceToNow(new Date(comment.created_at),{addSuffix: true} )}</p>
                            <p className="italic">{comment.comment}</p>
                        </Link>
                    )
                })
                :
                <h2 className="flex py-24 justify-center text-color-primary text-2xl">Anda belum memiliki komentar...</h2>
            }
            </div>
        </section>
        
    )
}

export default Page