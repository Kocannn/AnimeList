"use client"
import { ArrowLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Header = ({title}) => {
    const router = useRouter()
    const handlerBack = (ev) => {
        ev.preventDefault()
        router.back()
    }

    return (
        <div className="flex justify-between px-4 mt-4 items-center mb-4">
            <button className="text-color-primary shadow-xl transition-all" onClick={handlerBack}> <ArrowLeft size={32}  /></button>
            <h3 className="text-color-primary text-2xl font-bold">{title}</h3>
        </div>
    )
}

export default Header