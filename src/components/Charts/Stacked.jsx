import React from 'react';
// ChartComponent to use for charts
// SeriesCollectionDirective to display as series collection
// SeriesDirective to display as series
// Inject to inject charts
// Legend, Category, StackingColumnSeries, Tooltip 
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
// stackedCustomSeries , stackedPrimaryXAxis , stackedPrimaryYAxis , stacked
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

// width, height as a props 
const Stacked = ({width, height}) => {
  return (
    // ChartComponent to display the chart 
    <ChartComponent
      // height=height , width=width
      width={width}
      height={height}
      // id from dummy data name to perform hover effect
      id='charts'
      // x axis data 
      primaryXAxis={stackedPrimaryXAxis}
      // y axis data 
      primaryYAxis={stackedPrimaryYAxis}
      // chartArea data border width = 0 
      chartArea={{ border: { width: 0 } }}
      // tooltip enable= true
      tooltip={{ enable: true }}
      // legendSettings background = white 
      legendSettings={{ background: 'white' }}

    > 
      {/* Inject Legend,Category, StackingColumnSeries , Tooltip = servies to show Grid*/}
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      {/* SeriesCollectionDirective to display data */}
      <SeriesCollectionDirective>
        {/* stackedCustomSeries and map all the items into SerriesDirective and give here a unique key as a index and copy all the previous items as it is  */}
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
        {/* close the SeriesCollectionDirective  */}
      </SeriesCollectionDirective>
    </ChartComponent>
    )
}

export default Stacked;