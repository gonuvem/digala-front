import React, { useState } from 'react';

import { Container } from './styles';

interface SliderFieldProps {
  label: string;
  description?: string;
}

const SliderField: React.FC<SliderFieldProps> = ({ label, description }) => {
  const [valueRange, setValueRange] = useState(0);
  return (
    <Container>
      <label>
        {label && label}
        {description && <p>{description}</p>}
      </label>
      <div></div>
    </Container>
  );
};

export default SliderField;
