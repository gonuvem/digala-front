import React from 'react';

import FieldTypes from '../../../utils/fieldsTypes';

import CheckboxGraph from '../Checkbox';
import SingleChoiceGraph from '../SingleChoice';

interface QuestionData {
  type: string;
  name: string;
  data: any[];
}

interface GraphManagerProps {
  graph: QuestionData;
}

const GraphManager: React.FC<GraphManagerProps> = ({ graph }) => {
  switch (graph.type) {
    case FieldTypes.MultipleChoice:
      return <CheckboxGraph data={graph.data} />;
    case FieldTypes.SingleChoice:
      return <SingleChoiceGraph data={graph.data} />;
    default:
      return <div />;
  }
};

export default GraphManager;
