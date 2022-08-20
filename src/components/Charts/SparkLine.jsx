import React from 'react';
// import SparklineComponent to use Component 
// import Inject to inject into the SparklineComponent
// and SparklineTooltip to use SparklineTooltip
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

// destructure all the props one by one 
const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  
  return (
      // use SparklineComponent to use syncfusion chart component 
    <SparklineComponent
      // pass the props 
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
      border={{ color: currentColor, width: 2 }}
      // this is some custom setting for tooltipSettings
      tooltipSettings={{
          // this show the line 
          visible: true,
          // eslint-disable-next-line no-template-curly-in-string
        format: '${x} : data ${yval}',
          // this show the line data when we hover over the line 
          trackLineSettings: {
            visible: true,
          },
        }}
      markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
      // data Source =  our dummy data 
      dataSource={data}
      // on x-axis show x 
        xName="x"
      // on y-axis show x 
      yName="yval"
      // type of chart is the prop type 
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }


export default SparkLine;