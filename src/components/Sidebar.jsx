import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();
  
  // we make a function to check is menu is active and screen size is less than equal to 900 then set Actives side bar = fasle and called that function where we proform click
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }
 
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounder-lg  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounder-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    // margin left 3 height= screen height on medium devices overflow is hidden on normal devices overflow is auto on medium hover overflow is auto and padding bottom is 10
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {/* check if menu is active && show this sidebar menu*/}
      {activeMenu && (<>
        {/* flex is true justify-between  items-center */}
        <div className='flex justify-between items-center'>
          {/*  link to from 1 page to another page */}
          {/* items center gap-3 magin left 3 margin-top 4 flex is true text is extra large font is extra bold tracking is tight in mark text is white and text slate is black*/}
          <Link to='/' onClick={handleCloseSideBar} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
            {/* ShopWare icon + the Text */}
            <SiShopware /><span>TRA </span>
          </Link>
          {/* use TooltipComponent content=Menu position=BottomCenter */}
          <TooltipComponent content='Menu' position='BottomCenter'>
            {/* type is button text=extra large show it as a rounder-full padding-3 on hover backgroundColor=light gray marginTop=4 make it as a block element on medium devices hidden it */}
            {/* onClick we setActiveMenu to the prevActiveMenu to close provious state if it open */}
            <button type='button' onClick={() => setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} className='text-xl rounder-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
           {/* Wrap the Cancel icon into the button  */}
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        {/* marginTop:10 */}
        <div className='mt-10'> 
          {/* map the links array to show all the links */}
          {links.map((item) => (
            // give a unique id for each
            <div key={item.title}>
              {/* text-color=gray-400 margin=3  marginTop=4 default style is uppercase */}
              <p className='text-gray-400 m-3 mt-4 uppercase'>
                {/* show the item title */}
                {item.title}
              </p>
              {/* to show subheading into the link we make another loop */}
              {item.links.map((link) => (
                // show data into NavLink to move between pages 
                <NavLink
                  // give the path by using to keyword
                  to={`/${link.name}`}
                  // give a unique name for the sub link
                  key={link.name}
                  onClick={handleCloseSideBar}
                  // check if the navlink is active so set the backgroundColor equal to currentColor
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : '' ,
                    color : isActive ? 'white' : 'black'
                  })}
                  // in this we give className a state which show styling on the base of isActive status 
                  // if user is active he style it as a active otherwise as a normal  
                  className={({isActive})=>isActive ? activeLink : normalLink}
                >
                  {/* show sub link icon */}
                  {link.icon}
                  <span className='capitalize'>
                    {/* show sub link name */}
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar;