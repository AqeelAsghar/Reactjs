import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // File to use Routing in Project
import { FiSettings } from 'react-icons/fi';                     // File to use FI Settings icon from react-icons
import { TooltipComponent } from '@syncfusion/ej2-react-popups'; // File to use TooltipComponent in React from syncfusion

import { Navbar, Footer, Sidebar, ThemeSetting } from './components';
import { Ecommerce, Orders, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorMapping, Calander, Editor, ColorPicker } from './pages';
import { useStateContext } from './contexts/ContextProvider';
import './App.css';

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode} = useStateContext();

  return (
    // if 
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        {/* give a class name of flex give it a position relative and give its default mode is dark */}
        <div className='flex relative dark:bg-main-dark-bg'> 
          {/* give a class name of fixed margin from right & bottom is 4 and give inline style ZIndex=1000 because we want to show it above all other */}
          <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
             {/* Use the TooltipComponent component give it content settings and position is Top*/}
            <TooltipComponent content='Settings' position='Top'>
              {/* wrap the setting icon into button and give it type button */}
              {/* we give inline styling inline because want want to change it with our selected theme randomly */}
              <button type='button'
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                // setThemeSettings = true to show the theme settings when we click on setting button 
                onClick={() => setThemeSettings(true)}
                style={{background:currentColor , borderRadius:'50%'}} 
              >
                {/* Use FI Settings Icon*/}
               <FiSettings />
              </button>
            </TooltipComponent>  
          </div>
          {/* Check if Side menu is active then show sidebar width 72 class name sidebar and bydefault theme is dark */}
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
              <div className='w-0 dark:bg-secondary-dark-bg '>
                <Sidebar />
              </div>
          )} 
          {/* Check if menuBar is active then set dault theme is dark take minimum height of screen on mid level screen its take 72 which is equal to 3rem and take the full width of screen
            if menubar is not active so do same but set the perority is equal to 2 by using flex 2 
          */}
          <div className={
             activeMenu ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full' : ' bg-main-bg dark:bg-main-dark-bg main-h-screen w-full flex-2'
            }>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
              </div>
            <div>
              {/* Theme Setting for making website to change the Color  */}
              {/* is theme Setting=  true then show the theme setting sidebar otherside close it  */}
              {themeSettings &&  <ThemeSetting />}

              <Routes >
             
              {/* Dashboard */}
              <Route path='/' element={(<Ecommerce />)} />
              <Route path='/ecommerce' element={(<Ecommerce />)} />


              {/* Pages */}
              <Route path='/orders' element={<Orders />}  />
              <Route path='/employees' element={<Employees />}  />
              <Route path='/customers' element={<Customers />}  />

                {/* Apps */}
              <Route path='/calander' element={<Calander />}  />
              <Route path='/kanban' element={<Kanban />}  />
              <Route path='/editor' element={<Editor />}  />
              <Route path='/color-picker' element={<ColorPicker />}  />

              {/* Charts */}
              <Route path='/line' element={<Line />}  />
              <Route path='/area' element={<Area />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/financial' element={<Financial />}  />
              <Route path='/color-mapping' element={<ColorMapping />}  />
              <Route path='/pyramid' element={<Pyramid />}  />
              <Route path='/stacked' element={<Stacked />}  />
                   
              </Routes>
             

              </div>
            </div>
         </div>
      </BrowserRouter>
    </div>
  )
}

export default App