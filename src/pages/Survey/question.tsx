import React from 'react';
import { FiLink, FiMail } from 'react-icons/fi';
import { FaPhoneAlt } from 'react-icons/fa';

import ShortTextField from '../../components/ResearchFields/ShortTextField';

import { Question as IQuestion } from '../../store/ducks/questions/types';
import FieldsTypes from '../../utils/fieldsTypes';

interface FieldProps {
  question: {};
}

const Question: React.FC<FieldProps> = ({ question }) => {
  console.log('Question >> ', question);

  switch ('field?.alias') {
    case FieldsTypes.ShortText:
      return <p>Teste</p>;
    default:
      return null;
  }
};

export default Question;
