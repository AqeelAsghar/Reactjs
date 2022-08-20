import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Edit, Toolbar, Inject, Sort, Filter} from '@syncfusion/ej2-react-grids'
import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      {/* customer header which show on what page we are  */}
      <Header category="pages" title='Customers' />
      {/* this is beautiful listing the orders only with this 5 lines */}
      <GridComponent
        // data source is equal to ordersData
        dataSource={customersData}
        // allow pagination = true
        allowPaging
        // allow sorting = true
        allowSorting
        //  giving a write to Delete 
        toolbar={['Delete']}
        //  user and allow to delete abd edit anything 
        editSettings={{ allowDeleting: true, allowEditing: true }}
        // allow width is = auto width
        width='auto'
      >
        {/* columns Directive  */}
        <ColumnsDirective>
          {/* order Grid that tell which of data is on orers */}
          {customersGrid.map((item, index) => (
            // column directive to give new key and spread to copy the data
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        {/* this Inject function allow to inject resizing,sort,contextMenuItems,filter,page,excelExport,edit,pdfExport */}
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter,]} />
      </GridComponent>

    </div>
  )
}

export default Customers