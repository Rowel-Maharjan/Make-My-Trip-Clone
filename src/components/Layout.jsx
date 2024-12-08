import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    return (<>
        <div className="relative bg-cover flex flex-col min-h-[100vh] bg-no-repeat " style={{ backgroundImage: "url('https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg2.jpg')", backgroundSize: "100% 575px" }}>
            <div className='px-16 py-1'>
                <Header isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
            </div>
            <div className='flex items-center mt-7 flex-col h-full '>
                <div className='bg-white border rounded-xl flex items-center z-10 p-2'>
                    <Navbar isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
                </div>
                <Outlet />
            </div>
            <Footer />
        </div>
    </>
    )
}

export default Layout
