import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import { ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react';
import slider1 from '../assets/slider1.avif'
import slider2 from '../assets/slider2.avif'
import slider3 from '../assets/slider3.avif'

const Header = () => {
  const Icon = ({ type }) => {
    return <span className={`icon icon-${type}`} />;
  };

  const LoginIcon = ({ type }) => {
    return <span className={`loginIcon loginIcon-${type}`} />
  };

  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const dialogRef = useRef(null);
  const toggleDialog = (event) => {
    event.stopPropagation();
    setIsDialogOpen(!isDialogOpen);
  };
  const slides = [slider1, slider2, slider3]
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setIsDialogOpen(false);
      }
    };
    if (isDialogOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDialogOpen]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className='flex text-white items-center justify-between' >
      <img width={150} src="https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png" alt="" />
      <div className='flex gap-4'>

        {/* <div className='flex items-center gap-2 cursor-pointer'>
          <Icon type="listYourProperty" />
          <div className='flex flex-col text-[11px]' >
            <div className='leading-3'>List Your Property</div>
            <div className='text-gray-300 leading-3' >Grow your business</div>
          </div>
        </div>

        <div className='flex items-center gap-2 cursor-pointer shadow-lg px-3 border-dotted border-l-2 border-white/15'>
          <Icon type="myTripsIcon" />
          <div className='flex flex-col' >
            <div className='text-[11px] leading-3 font-bold'>My Trips</div>
            <div className='text-[10px] font-normal leading-3'>Manage your bookings</div>
          </div>
        </div> */}

        <div className='flex gap-2'>
          <div onClick={toggleDialog} className='flex items-center gap-2 bg-gradient-to-r from-[#53b2fe] to-[#065af3] py-2 pl-2 pr-3 rounded-md cursor-pointer'>
            <Icon type="myIconWhite" />
            <div className='flex w-40 items-center justify-between' >
              <div className='text-[11px] leading-3'>Login or Create Account </div>
              <span><ChevronDown size={16} strokeWidth={1.5} /></span>
            </div>
          </div>


          <div className='flex items-center gap-2 bg-[#ffffff26] py-2 pl-2 pr-3 rounded-md cursor-pointer'>
            <div className='flex items-center gap-2' >
              <div className='text-[11px] leading-3'>NEP | ENG </div>
              <span><ChevronDown size={16} strokeWidth={1.5} /></span>
            </div>
          </div>


          <div className='flex items-center gap-2 bg-[#ffffff26] py-2 pl-2 pr-3 rounded-md cursor-pointer'>
            <div className='flex items-center gap-2' >
              <div className='text-[11px] leading-3'>NPR </div>
              <span><ChevronDown size={16} strokeWidth={1.5} /></span>
            </div>
          </div>
        </div>
      </div>
      {isDialogOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20">
          <div ref={dialogRef} className='relative flex' onClick={(e) => e.stopPropagation()}>
            <div className='relative'>
              {
                slides.map((slide, index) => (
                  <img className={`${currentSlide === index ? 'opacity-100' : 'opacity-0 hidden'} rounded-xl`} key={index} src={slide} alt={`Slide ${index + 1}`} />
                ))
              }
              <div className='absolute top-0 left-0 w-full h-full bg-black rounded-xl bg-opacity-60 text-white z-50'>
                {
                  currentSlide === 0 && (
                    <div className='flex flex-col w-[295px] mx-auto items-center justify-center h-full '>
                      <div className='border border-white/40 rounded-sm p-5 flex flex-col text-2xl font-black gap-3'>
                        <span>Sign up now to join the club of</span>
                        <span>10 crore+ Happy Travellers</span>
                      </div>
                    </div>
                  )
                }
                {
                  currentSlide === 1 && (
                    <div className='flex flex-col w-72 mx-auto justify-center h-full '>
                      <div className='flex flex-col'>
                        <span className='font-black text-2xl mb-7'>Sign up now to get</span>
                        <div className='flex items-center gap-5 px-5 py-2 border-b border-white/40'>
                          <div>
                            <LoginIcon type="flight" />

                          </div>
                          <div className='flex flex-col'>
                            <span className='font-black text-base'>Flat 10% OFF</span>
                            <span className='text-sm font-normal'>On Domestic Flight*</span>
                          </div>
                        </div>
                        <div className='flex items-center gap-5 px-5 py-2 border-b border-white/40'>
                          <div>

                            <LoginIcon type="hotel" />
                          </div>
                          <div className='flex flex-col'>
                            <span className='font-black text-base'>Flat 20% OFF*</span>
                            <span className='text-sm font-normal'>On Domestic Hotels</span>
                          </div>
                        </div>
                        <div className='flex items-center gap-5 px-5 py-2 border-b border-white/40'>
                          <div>
                            <LoginIcon type="train" />

                          </div>
                          <div className='flex flex-col'>
                            <span className='font-black text-base'>Zero Convenience Fee*</span>
                            <span className='text-sm font-normal'>On Train Bookings</span>
                          </div>
                        </div>
                        <div className='text-sm font-black mt-4 text-center'>COUPON CODE:WELCOMEMMT</div>
                      </div>
                    </div>
                  )
                }
                {
                  currentSlide === 2 && (
                    <div className='flex flex-col w-[305px] mx-auto mt-20 h-full '>
                      <div className='flex flex-col'>
                        <span className='font-black text-2xl mb-7'>Sign up/Login now to</span>
                        <div className='flex items-center gap-5 px-5 py-2 border-b border-white/40'>
                          <div>
                            <LoginIcon type="flight" />
                          </div>
                          <div className='flex flex-col'>
                            <span className='font-black text-base'>Lock Flight Prices & Pay Later</span>
                          </div>
                        </div>
                        <div className='flex items-center gap-5 px-5 py-4 border-b border-white/40'>
                          <div>
                            <LoginIcon type="hotel" />

                          </div>
                          <div className='flex flex-col'>
                            <span className='font-black text-base'>Book Hotels @Rs0</span>
                          </div>
                        </div>
                        <div className='flex items-center gap-5 px-5 py-2'>
                          <div>
                            <LoginIcon type="train" />
                          </div>
                          <div className='flex flex-col'>
                            <span className='font-black text-base'>Get 3X refund, if your waitlisted train doesn’t get confirmed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
                <div className='absolute flex items-center justify-center bottom-2 left-[40%] bg-black bg-opacity-50 px-2 py-1 rounded-full gap-2 w-24 h-8'>
                  <div onClick={() => setCurrentSlide((currentSlide + slides.length - 1) % slides.length)} className='cursor-pointer'>
                    <ChevronLeft size={16} />
                  </div>
                  {
                    slides.map((slide, index) => (
                      <span key={index} className={`w-[6px] h-[6px] rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}></span>
                    ))
                  }
                  <div className='cursor-pointer'>
                    <ChevronRight onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)} size={16} />
                  </div>
                </div>
              </div>

            </div>
            <div className="bg-white text-black p-6 rounded-lg w-[520px] relative -ml-3 z-50">
              <h2 className="text-xl text-center font-semibold mb-4">Personal Account</h2>
              <p className="mb-1 text-[#4a4a4a] text-sm">Mobile Number</p>
              <div className='border border-[#9b9b9b] font-bold px-1 py-2 flex items-center gap-1 '>
                <img className='w-4 h-4' src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/flags/np.png" alt="" />
                <div className='text-[#4a4a4a] text-sm font-bold flex items-center gap-1 mr-1'>
                  +977
                </div>
                <input type="number" name="phone" id="phone" class="font-normal w-full focus:outline-none focus:bg-none focus:border-transparent pr-10  appearance-none" />
              </div>
              <div className='w-full mt-4'>
                <button className='text-white w-full rounded-full py-2 bg-blue-800 font-bold' type="submit">CONTINUE</button>
              </div>
              <div className='text-center border-b-2 items-center justify-center w-full flex mt-5'>
                <span className=' -mb-[10px] bg-white px-2 text-[#9b9b9b] font-bold text-sm'>Or Login/Signup With</span>
              </div>

              <div className='absolute -top-0 -right-8 flex items-center justify-center bg-white h-6 w-6 rounded-full'>
                <button
                  className=" text-black"
                  onClick={toggleDialog}
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header



