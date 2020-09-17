import React from 'react';
import { ResponsiveBar, BarDatum, BarItemProps } from '@nivo/bar';

interface BarRaceProps {
  data: BarDatum[];
}

const BarColors = ['#f90', '#f9f', '#5a8'];

const BarComponent: React.StatelessComponent<BarItemProps> = (props) => {
  const { x, y, width, height, color, borderColor, data } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <rect
        x={-3}
        y={7}
        width={width}
        height={height}
        fill="rgba(0, 0, 0, .07)"
      />
      <rect width={width} height={height} fill={color} />
      <rect
        x={width - 5}
        width={5}
        height={height}
        fill={borderColor}
        fillOpacity={0.2}
      />
      <text
        x={width - 16}
        y={height / 2 - 8}
        textAnchor="end"
        dominantBaseline="central"
        fill="black"
        style={{
          fontWeight: 900,
          fontSize: 15,
        }}
      >
        {data.indexValue}
      </text>
      <text
        x={width - 16}
        y={height / 2 + 10}
        textAnchor="end"
        dominantBaseline="central"
        fill={borderColor}
        style={{
          fontWeight: 400,
          fontSize: 13,
        }}
      >
        {data.value}
      </text>
    </g>
  );
};

const BarRace: React.FC<BarRaceProps> = ({ data }) => {
  return (
    <ResponsiveBar
      layout="horizontal"
      margin={{ top: 26, right: 120, bottom: 26, left: 60 }}
      data={data}
      indexBy="id"
      keys={['value']}
      colors={(d) => BarColors[d.index]}
      borderColor={{ from: 'color', modifiers: [['darker', 2.6]] }}
      enableGridX
      enableGridY={false}
      axisTop={{
        format: '~s',
      }}
      axisBottom={{
        format: '~s',
      }}
      axisLeft={null}
      padding={0.3}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.4]] }}
      isInteractive={false}
      barComponent={BarComponent}
      motionStiffness={170}
      motionDamping={26}
    />
  );
};

export default BarRace;
