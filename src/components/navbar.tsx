import React from 'react'
import { UserButton } from '@clerk/nextjs'
import MobielSidebar from "@/components/mobileSidebar"

const Navbar = () => {
  return (
    <div>
        <div className="flex items-center p-4">
            <MobielSidebar/>

            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl='/'/>   

            </div>
        </div>
    </div>
  )
}

export default Navbar