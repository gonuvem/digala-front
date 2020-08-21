import React from 'react';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';
import SelectField from '../../../../../components/ResearchFields/SelectField';

import { Question } from '../../../../../store/ducks/questions/types';

import { Container } from './styles';

const dateOptions = [
  { value: 'monthYear', label: 'Mês / Ano' },
  { value: 'dayMonthYear', label: 'Dia / Mês / Ano' },
  { value: 'dayMonth', label: 'Dia / Mês' },
];

const timeOptions = [
  { value: 'hourMinute', label: 'Hora : Minuto' },
  { value: 'hourMinuteSecond', label: 'Hora : Minuto : Segundo' },
];

interface DateTimeConfigurationProps {
  handleChange: Function;
  field: Question;
}

const DateTimeConfiguration: React.FC<DateTimeConfigurationProps> = ({
  handleChange,
  field,
}) => (
  <Container>
    <Form initialData={field} onSubmit={() => null}>
      <section>
        <ShortTextField
          label="Nome"
          placeholder="Data e Hora"
          name="label"
          id="dateTimeField"
          onChange={(event) => handleChange([event.target.value], ['label'])}
        />
      </section>
      <section>
        <TextAreaField
          label="Descrição"
          placeholder="Coloque aqui sua descrição..."
          name="description"
          id="dateTimeDescriptionField"
          onChange={(event) =>
            handleChange([event.target.value], ['description'])
          }
        />
      </section>
      <section>
        <ToggleSwitch
          label="Obrigatório"
          helpHint="Campo é obrigatório responder"
          name="isRequired"
          onChange={(event) =>
            handleChange([event.target.checked], ['isRequired'])
          }
        />
      </section>
      <section>
        <ToggleSwitch
          label="Exigir data"
          helpHint="Usuário será obrigado a colocar data"
          name="isDateRequired"
          onChange={(event) =>
            handleChange([event.target.checked], ['isDateRequired'])
          }
        />
      </section>
      <section>
        <SelectField
          name="dateFormat"
          label="Formato da data"
          answerOptions={dateOptions}
          onChange={(value: any) =>
            handleChange([value?.value], ['dateFormat'])
          }
        />
      </section>
      <section>
        <ToggleSwitch
          label="Exigir hora"
          helpHint="Usuário será obrigado a colocar horário"
          name="isTimeRequired"
          onChange={(event) =>
            handleChange([event.target.checked], ['isTimeRequired'])
          }
        />
      </section>
      <section>
        <SelectField
          name="timeFormat"
          label="Formato da hora"
          answerOptions={timeOptions}
          onChange={(value: any) =>
            handleChange([value?.value], ['timeFormat'])
          }
        />
      </section>
      <section>
        <ToggleSwitch
          label="Capturar intervalo"
          helpHint="Usuário é perguntado por um intervalo de datas"
          name="canCaptureInterval"
          onChange={(event) =>
            handleChange([event.target.checked], ['canCaptureInterval'])
          }
        />
      </section>
    </Form>
  </Container>
);

export default DateTimeConfiguration;
