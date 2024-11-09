import React from 'react'
import './Navbar.css'
import { useLocation, useNavigate } from 'react-router-dom';

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
        console.log(location.pathname, pathname, type)
        return <span className={`icons icon-${type} mb-2 ${((location.pathname === pathname) || (location.pathname === '/' && type === "hotels")) && 'active'}`} />;
    };

    return (
        <>
            <div className="flex gap-16 pt-2 pb-7 mx-10 mt-2 h-[100px] items-center">
                {NavbarIcons.map((icons) => (
                    <div
                        onClick={() => navigate(icons.pathname)}
                        key={icons.name}
                        className={`flex relative flex-col items-center max-w-[65px] p-1 cursor-pointer h-[82px] ${location.pathname === icons.pathname || (location.pathname === '/' && icons.type === "hotels") ? "text-[#008cff] font-bold" : "text-[#4a4a4a] font-normal"} `}
                    >
                        <Icon type={icons.type} pathname={icons.pathname} />
                        <span className="text-center leading-4 w-auto">
                            {icons.name}
                        </span>
                        {location.pathname === icons.pathname || (location.pathname === '/' && icons.type === "hotels") ? <div className='absolute h-[4px] w-full bg-[#008cff] left-0 -bottom-5  rounded-sm'></div> : ""}
                    </div>
                ))}
            </div>
        </>
    )
}

// 008cff 
export default Navbar
