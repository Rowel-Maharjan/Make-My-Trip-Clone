import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'

const Layout = () => {
    return (<>
        <div className="relative bg-cover flex flex-col min-h-[100vh] bg-no-repeat " style={{ backgroundImage: "url('https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg1.jpg')", backgroundSize: "100% 575px" }}>
            <div className='px-16 py-1'>
                <Header />
            </div>
            <div className='flex items-center mt-5 flex-col h-full '>
                <div className='bg-white border rounded-xl flex items-center z-10'>
                    <Navbar />
                </div>
                <div className='w-10/12 absolute text-white top-36'>
                    <Outlet />
                </div>
            </div>
        </div>
        <Outlet />
    </>

    )
}

export default Layout
