import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';

interface RadarData {
  label: string;
  respostas: number;
}

interface RadarProps {
  data: RadarData[];
}

const Radar: React.FC<RadarProps> = ({ data }) => {
  return (
    <ResponsiveRadar
      data={data}
      keys={['respostas']}
      indexBy="label"
      legends={[
        {
          anchor: 'top-left',
          direction: 'column',
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: '#999',
          symbolSize: 12,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  );
};

export default Radar;
