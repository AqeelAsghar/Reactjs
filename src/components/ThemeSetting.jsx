import React from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const ThemeSetting = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings} = useStateContext()
  return (
    // background Color is half transparent black width=screen width position= fixed top-0 right-0
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      {/* float to right position height= screen size on dark mode text color is gray background is white on dark its color width is 400 */}
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:[#484852] w-400'>
        {/* make a div to show settings and cross button */}
        {/* display:flex justify-between item-center padding=4 margin-left=4  */}
        <div className='flex justify-between item-center p-4 ml-4'>
          {/* font= semibold text=large */}
          <p className='font-semibold text-xl'>Settings</p>
          {/* style= color: light-gray border-radius: 50% to make circle*/}
          <button type='button' onClick={() => setThemeSettings(false)} style={{ color: 'rgba(153,171,180)', borderRadius: '50%' }} className='text-2xl  hover:drop-shadow-xl hover:bg-light-gray'>
            <MdOutlineCancel />
          </button>
        </div>
        {/* flex-direction: column border-top-width: 1px padding=4 margin-left=4  */}
        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          {/* font= semibold text=large */}
          <p className='font-semibold text-lg'>Theme Options</p>
          {/* margin-top=4 */}
          <div className='mt-4'>
            {/* cursor=pointer that make this input a touchable */}
            <input
              type='radio'
              id='light'
              name='theme'
              value='Light'
              className='cursor-pointer'
              onChange={setMode}
              checked={currentMode === 'Light'}
            />
            {/*  give the input a lable  */}
            <lable htmlFor='light' className='ml-2 text-md cursor-pointer'>
              Light
            </lable>
          </div>
          {/* margin-top=4 */}
          <div className='mt-4'>
            {/* cursor=pointer that make this input a touchable */}
            <input
              type='radio'
              id='dark'
              name='theme'
              value='Dark'
              className='cursor-pointer'
              onChange={setMode}
              checked={currentMode === 'Dark'}
            />
            {/*  give the input a lable  */}
            <lable htmlFor='dark' className='ml-2 text-md cursor-pointer'>
              Dark
            </lable>
          </div>
        </div>

        {/* flex-direction: column border-top-width: 1px padding=4 margin-left=4  */}
        <div className='flex-col border-t-1 border-color p-4 ml-4'>
          {/* font= semibold text=large */}
          <p className='font-semibold text-lg'>Theme Colors</p>
          {/* display=flex gap=3 */}
          <div className='flex gap-3'>
            {/* to display the diffrent colors we map the themeColors with item itself + the index  */}
            {themeColors.map((item, index) => (
              // make a tooltip component that pass index as a key and give a content name =  item name and position=  TopCenter 
              <TooltipComponent key={index} content={item.name} position="TopCenter">
                {/* inside it make a div that display it  */}
                <div
                  // give it a postition relative and aling-item =  center 
                  className="relative mt-2 cursor-pointer flex gap-5 items-center"
                  // and give item name as a unique key 
                  key={item.name}
                >
                  {/* make a button that have height=10 width=10 rounded=full cursor-pointer  backgroundColor is item.color */}
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    {/* to mae it check or unselected we make dynamic array that give a mergin-lefe=2 text=2xl textcolor=white check its true then make it block and show tick mark on that color */}
                    <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`} />
                  </button>
                </div>
              </TooltipComponent>
            ))}

          </div>
          </div>
      </div>
    </div>
  )
}

export default ThemeSetting;