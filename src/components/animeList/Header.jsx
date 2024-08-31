import Link from "next/link"

const Header = ({title, linkHref, linkTitle}) => {
    return(
        <div className="flex justify-between items-center pt-4 px-10">
            <h1 className="font-bold text-xl text-color-primary"> {title}</h1>
            { 
                linkHref && linkTitle ?  <Link href={linkHref} className="text-sm underline   hover:text-blue-400 text-color-primary text-opacity-75 transition-all">{linkTitle}</Link> : null
            }
        </div>
    )
}

export default Header