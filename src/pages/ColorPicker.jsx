import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'
import { Header } from '../components'

// on chnage function which take some argument 
const change = (args) => {
  // getting the pen by it id access its backGround color and set it equal to the argument currentvalue and change hexidecimal
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex
}

const ColorPicker = () => {
  return (
    <div className = 'm-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounder-3xl' >
      {/* header for giving the category adnd the title  */ }
      < Header category='App' title='ColorPicker' /> 
      <div className='text-center'>
        <div id='preview' />
        <div className='flex justify-center item-center gap-20 flex-wrap'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
            {/* show the Color picker Component  */}
            <ColorPickerComponent
              // just by giving the inline-palette id our palette is display 
              id='inline-palette'
              // mode set a palette
              mode='Palette'
              // we dont want to switch mode that why it false
              modeSwitcher={false}
              // this is inline 
              inline 
              // we dont want to show buttons  that why it false
              showButtons={false}
              // to display the change into our pen we call the chnage function
              change={change}
            />
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
            {/* show the Color picker Component  */}
            <ColorPickerComponent
              // just by giving the inline-palette id our palette is display 
              id='inline-palette'
              // mode set a Picker
              mode='Picker'
              // we dont want to switch mode that why it false
              modeSwitcher={false}
              // this is inline 
              inline
              // we dont want to show buttons  that why it false
              showButtons={false}
              // to display the change into our pen we call the chnage function
              change={change}

            />
          </div>
        </div>
      </div>  
    </div>
  )
}

export default ColorPicker