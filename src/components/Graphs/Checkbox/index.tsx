import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';

interface CheckboxData {
  label: string;
  respostas: number;
}

interface CheckboxGraphProps {
  data: CheckboxData[];
}

const CheckboxGraph: React.FC<CheckboxGraphProps> = ({ data }) => {
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

export default CheckboxGraph;
