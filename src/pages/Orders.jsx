import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      {/* customer header which show on what page we are  */}
      <Header category="pages" title='Orders' />
      {/* this is beautiful listing the orders only with this 5 lines */}
      <GridComponent
        // id of grid Component
        id='gridcomp'
        // data source is equal to ordersData
        dataSource={ordersData}
        // allow pagination = true
        allowPaging
        // allow sorting = true
        allowSorting
      >
        {/* columns Directive  */}
        <ColumnsDirective>
          {/* order Grid that tell which of data is on orers */}
          {ordersGrid.map((item, index) => (
            // column directive to give new key and spread to copy the data
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        {/* this Inject function allow to inject resizing,sort,contextMenuItems,filter,page,excelExport,edit,pdfExport */}
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]}/>
      </GridComponent>
      
    </div>
  )
}

export default Orders