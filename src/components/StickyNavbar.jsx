import React from 'react'
import './Navbar.css'
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StickyNavbar = ({ isDialogOpen = false, setIsDialogOpen = () => { }, user = false }) => {
    const NavbarIcons = [
        {
            name: "Hotels",
            pathname: "/hotels",
            type: "hotels"
        },
        {
            name: "Homestays & Villas",
            pathname: "/homestays",
            type: "homestay"
        },
        {
            name: "Holiday Packages",
            pathname: "/holidays",
            type: "holidays"
        },
        {
            name: "Buses",
            pathname: "/bus",
            type: "bus"
        },
        {
            name: "Cabs",
            pathname: "/cabs",
            type: "cabs"
        },
    ]

    const IconSmall = ({ type, pathname }) => {
        return <span className={`icons-small icon-small-${type} mb-2 ${((location.pathname.includes(pathname)) || (location.pathname === '/' && type === "hotels")) && 'active'}`} />;
    };
    const IconMY = ({ type }) => {
        return <span className={`iconMy text-green-200 iconMy-${type} inline-block absolute top-1 left-1`} />;
    };
    const toggleDialog = (event) => {
        event.stopPropagation();
        setIsDialogOpen(!isDialogOpen);
    };
    const navigate = useNavigate();
    return (
        <div className='flex justify-between items-center'>
            <img
                width={150}
                src="https://promos.makemytrip.com/Growth/Images/3x/mmt_dt_header_icon_3x.png"
                alt="Sticky Logo"
            />
            <div className='flex gap-5'>
                {NavbarIcons.map((icons) => (
                    <div
                        onClick={() => {
                            navigate(icons.pathname);
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}
                        key={icons.name}
                        className={`flex relative flex-col items-center max-w-[65px] p-1 cursor-pointer ${location.pathname === icons.pathname || (location.pathname === '/' && icons.type === "hotels") ? "text-[#008cff] font-bold" : "text-[#4a4a4a] font-normal"} `}
                    >
                        <IconSmall type={icons.type} pathname={icons.pathname} />
                        <span className="text-center leading-4 max-w-[51px] font-normal text-xs overflow-hidden truncate">
                            {icons.name}
                        </span>
                    </div>

                ))}
            </div>
            <div className='flex items-center gap-5'>
                {
                    user ?
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <span className='w-6 h-6 rounded-full relative bg-gradient-to-r from-[#ace143] to-[#219393]'>
                                <IconMY type="myIconWhite" />
                            </span>
                            <div className='flex items-center gap-2 justify-between' >
                                <div className='text-[12px] font-bold leading-3'>Hi Traveller</div>

                                <span><ChevronDown size={16} className='text-blue-500' strokeWidth={2.5} /></span>
                            </div>
                        </div>
                        :
                        <div onClick={toggleDialog} className='flex items-center gap-2 cursor-pointer'>
                            <span className='w-6 h-6 rounded-full relative bg-gradient-to-r from-[#ace143] to-[#219393]'>
                                <IconMY type="myIconWhite" />
                            </span>
                            <div className='flex flex-col justify-between' >
                                <div className='text-[12px] font-bold leading-3'>Login or</div>
                                <div className='text-[12px] font-bold leading-3'>Create Account </div>
                            </div>
                        </div>
                }

                {
                    !user && <div className='cursor-pointer'>
                        <div className='text-[10px] leading-[10px]'>Country</div>
                        <div className='flex items-center'>
                            <img className='w-4 h-4' src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/flags/np.png" alt="" />
                            <span className='mr-2 text-[10px] font-bold'>Nepal</span>
                            <span><ChevronDown size={16} className='text-blue-500' strokeWidth={2.5} /></span>
                        </div>
                    </div>
                }

                {
                    !user && <div className='cursor-pointer'>
                        <div className='text-[10px] leading-[10px]'>Language</div>
                        <div className='flex items-center'>
                            <span className='mr-2 text-[10px] font-bold'>ENG</span>
                            <span><ChevronDown size={16} className='text-blue-500' strokeWidth={2.5} /></span>
                        </div>
                    </div>
                }

                <div className='cursor-pointer'>
                    <div className='text-[10px] leading-[10px]'>Currency</div>
                    <div className='flex items-center'>
                        <span className='mr-2 text-[10px] font-bold'>NPR</span>
                        <span><ChevronDown size={16} className='text-blue-500' strokeWidth={2.5} /></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StickyNavbar
