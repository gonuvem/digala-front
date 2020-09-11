import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';

interface RadarWithImagesData {
  label: string;
  respostas: number;
}

interface RadarWithImagesProps {
  data: RadarWithImagesData[];
}

const RadarWithImages: React.FC<RadarWithImagesProps> = ({ data }) => {
  return (
    <ResponsiveRadar
      data={data}
      keys={['respostas']}
      indexBy="label"
      margin={{ top: 30, bottom: 35 }}
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

export default RadarWithImages;
