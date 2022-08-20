import React from 'react'
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'
import { scheduleData } from '../data/dummy'
import { Header } from '../components'

const Calander = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounder-3xl'>
      {/* header for giving the category adnd the title  */}
      <Header category='App' title='Calander' />
      {/* ScheduleComponent to handle our calander component  */}
      <ScheduleComponent
        height='650px'
        //  giving the source of the data 
        eventSettings={{ dataSource: scheduleData }}
        // giving it a selected it becuase we have 2021 data into our dummy Data 
        selectedDate= {new Date(2021,0,10)}
      >
        {/*  injected a day, week, workWeek, Month, Agenda, DragAndDrop functionality into our calander  */}
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop ]}/>
       </ScheduleComponent>
    </div>
  )
}

export default Calander