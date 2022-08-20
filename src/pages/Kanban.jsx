import React from 'react'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban'
import { kanbanGrid, kanbanData } from '../data/dummy'
import { Header } from '../components'

const Kanban = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounder-3xl'>
      {/* header for giving the category adnd the title  */}
      <Header category='App' title='Kanban' />
      {/* KanbanComponent to handle the Kanban functionality */}
      <KanbanComponent
        // give a  id  
        id='kanban'
        // dataSource of data 
        dataSource={kanbanData}
        // cardSetting to tell what we see on contentField we want to see summary of our dummyData Array and on headerFiled we want to see Id Id is mandatory becuase we want to track the task bese on Id   
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
        // on keyFeild we set the key on the base of our Status either its open, InProgess, testing and done   
        keyField= 'Status'
      >
        {/* use the ColumnsDirective to display Multi Columns Data  */}
        <ColumnsDirective>
          {/* map the KanbanGrid as 1 by one ColumnsDirective in key we give unique key which is index and copy the pervious item array using spread operator */}
          {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
      </KanbanComponent>

      </div>
  )
}

export default Kanban