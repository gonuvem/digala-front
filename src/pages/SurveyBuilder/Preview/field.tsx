import React from 'react';
import { FiLink } from 'react-icons/fi';

import ShortTextField from '../../../components/ResearchFields/ShortTextField';
import IconTextField from '../../../components/ResearchFields/IconTextField';
import SingleChoiceField from '../../../components/ResearchFields/SingleChoiceField';

import FieldsTypes from '../../../utils/fieldsTypes';

interface FieldProps {
  alias: string;
  config?: {};
}

const Field: React.FC<FieldProps> = ({ alias, config }) => {
  switch (alias) {
    case FieldsTypes.ShortText:
      return <ShortTextField name="short-teste" id="short-id" />;
    case FieldsTypes.SingleChoice:
      return (
        <SingleChoiceField
          label="Teste"
          name="single- teste"
          id="single-id"
          choices={['opção 01', 'opção 02', 'opção 03']}
        />
      );
    case FieldsTypes.Link:
      return <IconTextField name="icon-teste" id="icon-id" icon={FiLink} />;
    default:
      return null;
  }
};

export default Field;
