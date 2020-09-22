import React from 'react';

import Radar from '../Radar';
import Pie from '../Pie';
import BarRace from '../BarRace';
import Calendar from '../Calendar';
import RadarWithImage from '../RadarWithImage';

interface QuestionData {
  type: string;
  name: string;
  data: {
    id: string;
    day: string;
    label: string;
    respostas: number;
    value: number;
  }[];
}

interface ChartManagerProps {
  chart: QuestionData;
}

const GraphTypes = {
  radar: 'radar',
  pie: 'pie',
  barRace: 'barRace',
  calendar: 'calendar',
  radarImage: 'radarImage',
};

const ChartManager: React.FC<ChartManagerProps> = ({ chart }) => {
  switch (chart.type) {
    case GraphTypes.radar:
      return <Radar data={chart.data} />;
    case GraphTypes.pie:
      return <Pie data={chart.data} />;
    case GraphTypes.barRace:
      return <BarRace data={chart.data} />;
    case GraphTypes.calendar:
      return <Calendar data={chart.data} />;
    case GraphTypes.radarImage:
      return <RadarWithImage data={chart.data} />;
    default:
      return <div />;
  }
};

export default ChartManager;
