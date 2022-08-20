/* eslint-disable jsx-a11y/alt-text */
import React,{ useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
// use use . path becasue we already into that folder
import { Cart, Chat, Notification, UserProfile } from '.'; 
// import the useStateContext from ContextProvider to use  useState Hook into this page
import { useStateContext } from '../contexts/ContextProvider';

// we make a generic button function because we wanted it alot pass some parameters  
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  // wrap it into the TooltipComponent to use Toollip funtionility 
  <TooltipComponent content={title} position='BottomCenter'>
    {/* make a a icon button we wrap it between the button and give it styling and use its parameters where we want it  */}
    <button type='button' onClick={customFunc} style={{color: color}} className='relative text-xl rounder-full p-3 hover:bg-light-gray'>
      <span style={{background:dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
        {icon}
        
       </button>
  </TooltipComponent>
)

const Navbar = () => {
  // destructure the all the objets from the  useStateContext 
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext();
  
  // to check the screenSize at the time of loading 
  useEffect(() => {
    // we use this lines 
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // use another UseEffect that called only when the ScreenSize is change 
  useEffect(() => { 
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true)
      }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenSize]);

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      {/* for showing  and hidding the sidebase we use Menu button for that use set setActiveMenu and close the previous ActiveMenu if he open  */}
      <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor} icon={<AiOutlineMenu />}
      />
    
      <div className="flex">
        {/* make an other button on custom function we call the handleClick and pass it a cart prop */}
        <NavButton title="Cart" customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart />} /> 
        {/* make an other button on custom function we call the handleClick and pass it a cart prop */}
        <NavButton title="Chat" dotColor='#03C9D7' customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} /> 
        {/* make an other button on custom function we call the handleClick and pass it a notification prop */}
        <NavButton title="Notifications" dotColor='#03C9D7' customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} /> 
        {/* to make profile we wrapp it into the ToolipComponent  */}
        <TooltipComponent content="profile" position="BottomCenter">
          {/* show user Image  */}
          <div className="flex item-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={()=> handleClick('userProfile')}>
            <img className='rounded-full w-8 h-8' src={avatar} />
            <p>
              {/* show Hi msg  and add space between it  */} 
              <span className="text-gray-400 text-14">Hi</span> {' '}
              {/* show the user name  */}
              <span className="text-gray-400 font-bold ml-1 text-14">Micheal</span>
            </p>
            {/* display the arrow down  */}
            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
             </div>
        </TooltipComponent>
        {/* and display if isClicked.cart then show cart page */}
        {isClicked.cart && <Cart />}
        {/* and display if isClicked.cart then show chat page */}
        {isClicked.chat && <Chat />}
        {/* and display if isClicked.cart then show notification page */}
        {isClicked.notification && <Notification />}
        {/* and display if isClicked.cart then show userprofile page */}
        {isClicked.userProfile && <UserProfile />}
      </div> 
    </div>
  )
}

export default Navbar;