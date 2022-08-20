import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search,Toolbar, Inject } from '@syncfusion/ej2-react-grids'
import { employeesData, employeesGrid } from '../data/dummy'
import { Header } from '../components'

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      {/* customer header which show on what page we are  */}
      <Header category="pages" title='Employees' />
      {/* this is beautiful listing the orders only with this 5 lines */}
      <GridComponent
        // data source is equal to ordersData
        dataSource={employeesData}
        // allow pagination = true
        allowPaging
        // allow sorting = true
        allowSorting
        // toobar to inject search into the table
        toolbar={['Search']}
        // set width = auto
        width='auto'
      >
        {/* columns Directive  */}
        <ColumnsDirective>
          {/* order Grid that tell which of data is on orers */}
          {employeesGrid.map((item, index) => (
            // column directive to give new key and spread to copy the data
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        {/* this Inject function allow to inject resizing,sort,contextMenuItems,filter,page,excelExport,edit,pdfExport */}
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>

    </div>
  )
}

export default Employees