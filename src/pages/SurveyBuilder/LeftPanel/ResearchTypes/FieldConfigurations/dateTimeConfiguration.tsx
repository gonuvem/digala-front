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
          name="required"
          onChange={(event) =>
            handleChange([event.target.checked], ['required'])
          }
        />
      </section>
      <section>
        <ToggleSwitch
          label="Exigir data"
          helpHint="Usuário será obrigado a colocar data"
          name="dateRequired"
          onChange={(event) =>
            handleChange([event.target.checked], ['dateRequired'])
          }
        />
      </section>
      <section>
        <SelectField
          name="dateFormat"
          label="Formato da data"
          listOptions={dateOptions}
          onChange={(value: any) =>
            handleChange([value?.value], ['dateFormat'])
          }
        />
      </section>
      <section>
        <ToggleSwitch
          label="Exigir hora"
          helpHint="Usuário será obrigado a colocar horário"
          name="timeRequired"
          onChange={(event) =>
            handleChange([event.target.checked], ['timeRequired'])
          }
        />
      </section>
      <section>
        <SelectField
          name="timeFormat"
          label="Formato da hora"
          listOptions={timeOptions}
          onChange={(value: any) =>
            handleChange([value?.value], ['timeFormat'])
          }
        />
      </section>
      <section>
        <ToggleSwitch
          label="Capturar intervalo"
          helpHint="Usuário é perguntado por um intervalo de datas"
          name="selectRange"
          onChange={(event) =>
            handleChange([event.target.checked], ['selectRange'])
          }
        />
      </section>
    </Form>
  </Container>
);

export default DateTimeConfiguration;
