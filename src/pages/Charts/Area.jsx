import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries, DateTime, Legend } from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {
  // currentMode to set the mode 
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Infration Rate with Percentage' />

      {/* chart Component to hold the chart data */}
    <ChartComponent
      id="area-chart"
      height="420px"
      // data to show on X Axis 
        primaryXAxis={areaPrimaryXAxis}
      // data to show on X Axis 
        primaryYAxis={areaPrimaryYAxis}
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
      <Inject services={[SplineAreaSeries, DateTime, Legend]} />
      {/* for mapping the data use the SeriesCollectionDirective from syncfusion */}
      <SeriesCollectionDirective>
        {/* show the SeriesDirective line by line where key= index and store item as a copy  */}
        {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;