import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { useLocation, useNavigate } from 'react-router-dom';
import StickyNavbar from './StickyNavbar';

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

const Navbar = ({ isDialogOpen, setIsDialogOpen }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const Icon = ({ type, pathname }) => {
        return <span className={`icons icon-${type} mb-2 ${((location.pathname === pathname) || (location.pathname === '/' && type === "hotels")) && 'active'}`} />;
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


            <div className={`sticky-header fixed top-0 left-0 w-full shadow-xl  px-20 py-1 text-black bg-white z-50 transition-transform duration-300 transform ${isStickyVisible ? "translate-y-0" : "-translate-y-full"}`}>
                <StickyNavbar isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
            </div>
        </>
    )

}

export default Navbar
