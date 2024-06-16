"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'

const monsterat=Montserrat({
  weight:"600",
  subsets:["latin"]
})

const routes=[
  {
    label:"Dashboard",
    href:"/dashboard",
    icon:LayoutDashboard,
    color:"text-sky-600"

  },

  {
    label:"Converstation",
    href:"/converstation",
    icon:MessageSquare,
    color:"text-violet-500"

  },

  {
    label:"Image Generation",
    href:"/image",
    icon:ImageIcon,
    color:"text-pink-600"

  },

  {
    label:"Vedio Generation",
    href:"/vedio",
    icon:VideoIcon,
    color:"text-orange-600"

  },
  {
    label:"Music Generations",
    href:"/music",
    icon:Music,
    color:"text-emerald-600"

  },
  {
    label:"Code Generation",
    href:"/code",
    icon:Code,
    color:"text-green-600"

  },
  {
    label:"Settings",
    href:"/settings",
    icon:Settings,
   

  },
]

const Sidebar = () => {
  const pathname=usePathname();
  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-[#11827] text-white'>
        <div className="px-3 py-3 flex-1">
            <Link href="/dashboard" className='flex items-center pl-3 mb-14'>
            <div className="relative w-8 h-8 mr-4">
                <Image
                src="/images.jpeg"
                fill              
                alt="jarvis"/>
            </div>
            <h1 className={cn('text-2xl font-bold ', monsterat.className)}>Jarvis</h1>
            </Link>


            <div className='space-y-1'>
              {
                routes.map((route)=>(
                  <Link 
                  href={route.href}
                  key={route.href}
                  className={cn('text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',pathname===route.href?"text-white bg-white/10":"text-zinc-400")}
                  >

                    <div className='flex flex-1 items-center'>
                      <route.icon className={cn("h-5 mr-3 w-5",route.color)}/>
                      {route.label}
                    </div>
                  
                  </Link>
                ))
              }

            </div>
            
        </div>
        
    </div>
  )
}

export default Sidebar