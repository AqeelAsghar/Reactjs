import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {
  // currentMode to set the mode 
  const { currentMode } = useStateContext();

  return (
    // chart Component to hold the chart data
    <ChartComponent
      id="line-chart"
      height="420px"
      // data to show on X Axis 
      primaryXAxis={LinePrimaryXAxis}
      // data to show on X Axis 
      primaryYAxis={LinePrimaryYAxis}
      // chatArea to remove the Border and set its width to 0px 
      chartArea={{ border: { width: 0 } }}
      // enable the tooltip that make make hover effect when on move cursor on chart 
      tooltip={{ enable: true }}
      // on base if dark mode then set color to light black otherwise white 
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      // set the legend setting colors white too 
      legendSettings={{ background: 'white' }}
    >
      {/* Inject servies like LinesSeries, DateTime,Lengend,Tooltip  */}
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      {/* for mapping the data use the SeriesCollectionDirective from syncfusion */}
      <SeriesCollectionDirective>
        {/* show the SeriesDirective line by line where key= index and store item as a copy  */}
        {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;