import React from 'react';

import Radar from '../Radar';
import Pie from '../Pie';
import BarRace from '../BarRace';
import Calendar from '../Calendar';

interface QuestionData {
  type: string;
  name: string;
  data: any[];
}

interface GraphManagerProps {
  graph: QuestionData;
}

const GraphTypes = {
  radar: 'radar',
  pie: 'pie',
  barRace: 'barRace',
  calendar: 'calendar',
};

const GraphManager: React.FC<GraphManagerProps> = ({ graph }) => {
  switch (graph.type) {
    case GraphTypes.radar:
      return <Radar data={graph.data} />;
    case GraphTypes.pie:
      return <Pie data={graph.data} />;
    case GraphTypes.barRace:
      return <BarRace data={graph.data} />;
    case GraphTypes.calendar:
      return <Calendar data={graph.data} />;
    default:
      return <div />;
  }
};

export default GraphManager;
