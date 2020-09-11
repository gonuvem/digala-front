import React from 'react';
import { ResponsiveRadar, CustomFormatter } from '@nivo/radar';

import { Container } from './styles';

interface RadarWithImagesData {
  label: string;
  respostas: number;
}

interface RadarWithImagesProps {
  data: RadarWithImagesData[];
}

const Tooltip: CustomFormatter = (...args: any[]) => {
  console.log('Args: ', args);

  return (
    <>
      <Container>
        <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/51F3/production/_106997902_gettyimages-611696954.jpg" />
      </Container>
    </>
  );
};

const RadarWithImages: React.FC<RadarWithImagesProps> = ({ data }) => {
  return (
    <ResponsiveRadar
      data={data}
      keys={['respostas']}
      indexBy="label"
      margin={{ top: 30, bottom: 35 }}
      tooltipFormat={Tooltip}
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
