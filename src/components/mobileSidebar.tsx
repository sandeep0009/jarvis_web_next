"use client"

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

import { Menu } from 'lucide-react'
import Sidebar from '@/components/sidebar'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"


const MbileSideBar = () => {
    const[isMounted,setMounted]=useState(false);

    useEffect(()=>{
        setMounted(true)
    },[])


    if(!isMounted){
        return null;
    }

    return (
        <div>
            <Sheet>
                <SheetTrigger >
                    <Button variant="ghost" size="icon" className='md:hidden'>
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" >
                    <Sidebar />

                </SheetContent>
            </Sheet>

        </div>
    )
}

export default MbileSideBar