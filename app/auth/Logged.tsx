'use client'

import Image from "next/image"
import { signOut } from "next-auth/react"
import Link from "next/link"

type User={
    image: string
}
export default function Logged({image}:User) {
    return (
        <li className="list-none flex h-14 gap-6 items-center">
            <Link href={"/dashboard"}>
                <Image src={image} width={128} height={128} className="w-14 rounded-full" alt="profile" priority />
            </Link>            
            <button className="text-sm bg-gray-700 text-white py-2 px-4 rounded-3xl disabled:opacity-25" onClick={() => signOut()}>
                Sign Out
            </button>

        </li>
    )
}
