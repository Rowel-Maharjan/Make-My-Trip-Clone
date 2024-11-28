import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

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

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const Icon = ({ type, pathname }) => {
        return <span className={`icons icon-${type} mb-2 ${((location.pathname === pathname) || (location.pathname === '/' && type === "hotels")) && 'active'}`} />;
    };
    const IconSmall = ({ type, pathname }) => {
        return <span className={`icons-small icon-small-${type} mb-2 ${((location.pathname === pathname) || (location.pathname === '/' && type === "hotels")) && 'active'}`} />;
    };
    const IconMY = ({ type }) => {
        return <span className={`iconMy text-green-200 iconMy-${type} `} />;
    };

    const [isStickyVisible, setIsStickyVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsStickyVisible(true);
            } else {
                setIsStickyVisible(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className="flex gap-16 pt-2 pb-7 mx-10 mt-2 h-[80px] items-center">
                {NavbarIcons.map((icons) => (
                    <div
                        onClick={() => { navigate(icons.pathname); window.scrollTo(0, 0) }}
                        key={icons.name}
                        className={`flex relative flex-col items-center max-w-[65px] p-1 cursor-pointer h-[85px] ${location.pathname === icons.pathname || (location.pathname === '/' && icons.type === "hotels") ? "text-[#008cff] font-bold" : "text-[#4a4a4a] font-normal"} `}
                    >
                        <Icon type={icons.type} pathname={icons.pathname} />
                        <span className="text-center leading-4 w-auto">
                            {icons.name}
                        </span>
                        {location.pathname === icons.pathname || (location.pathname === '/' && icons.type === "hotels") ? <div className='absolute h-[4px] w-full bg-[#008cff] left-0 -bottom-[17px]  rounded-sm'></div> : ""}
                    </div>
                ))}
            </div>


            <div className={`sticky-header fixed top-0 left-0 w-full shadow-xl flex justify-between items-center px-20 py-1 text-black bg-white z-50 transition-transform duration-300 transform ${isStickyVisible ? "translate-y-0" : "-translate-y-full"}`}>

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
                    <div className='flex items-center gap-2 bg-gradient-to-r from-[#53b2fe] to-[#065af3] py-2 pl-2 pr-3 rounded-md cursor-pointer'>
                        <IconMY type="myIconWhite" />
                        <div className='flex items-center justify-between' >
                            <div className='text-[11px] leading-3'>Login or Create Account </div>
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <div className='text-[10px] leading-[10px]'>Country</div>
                        <div className='flex items-center'>
                            <img className='w-4 h-4' src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/flags/np.png" alt="" />
                            <span className='mr-2 text-[10px] font-bold'>Nepal</span>
                            <span><ChevronDown size={16} className='text-blue-500' strokeWidth={1.5} /></span>
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <div className='text-[10px] leading-[10px]'>Language</div>
                        <div className='flex items-center'>
                            <span className='mr-2 text-[10px] font-bold'>ENG</span>
                            <span><ChevronDown size={16} className='text-blue-500' strokeWidth={1.5} /></span>
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <div className='text-[10px] leading-[10px]'>Currency</div>
                        <div className='flex items-center'>
                            <span className='mr-2 text-[10px] font-bold'>NPR</span>
                            <span><ChevronDown size={16} className='text-blue-500' strokeWidth={1.5} /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}


// 008cff 
export default Navbar
