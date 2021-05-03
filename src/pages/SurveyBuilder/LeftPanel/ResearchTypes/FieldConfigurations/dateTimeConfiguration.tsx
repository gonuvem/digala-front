import React, { useRef, useEffect, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import ShortTextField from '../../../../../components/ResearchFields/ShortTextField';
import TextAreaField from '../../../../../components/ResearchFields/TextAreaField';
import ToggleSwitch from '../../../../../components/Common/ToggleSwitch';
import SelectField from '../../../../../components/ResearchFields/SelectField';

import { Question } from '../../../../../store/ducks/questions/types';
import { useDebouncedCallback } from '../../../../../hooks/useDebouncedCallback';

import { Container } from './styles';

const dateOptions = [
  { value: 'monthYear', label: 'Mês / Ano', _id: 'date-format-my' },
  { value: 'dayMonthYear', label: 'Dia / Mês / Ano', _id: 'date-format-dmy' },
  { value: 'dayMonth', label: 'Dia / Mês', _id: 'date-format-dm' },
];

const timeOptions = [
  { value: 'hourMinute', label: 'Hora : Minuto', _id: 'time-format-hm' },
  {
    value: 'hourMinuteSecond',
    label: 'Hora : Minuto : Segundo',
    _id: 'time-format-hms',
  },
];

interface DateTimeConfigurationProps {
  handleChange: Function;
  field: Question;
}

const DateTimeConfiguration: React.FC<DateTimeConfigurationProps> = ({
  handleChange,
  field,
}) => {
  const formRef = useRef<FormHandles>(null);
  const [isTimeRequired, setIsTimeRequired] = useState(
    field.isTimeRequired || false,
  );

  useEffect(() => {
    formRef.current?.setData(field);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.id]);

  const onChange = useDebouncedCallback(
    (value: any[], properties: string[]) => {
      handleChange(value, properties);
    },
    500,
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={() => null}>
        <section>
          <ShortTextField
            label="Nome"
            placeholder="Data e Hora"
            name="label"
            id="dateTimeField"
            onChange={(event) => onChange([event.target.value], ['label'])}
          />
        </section>
        <section>
          <TextAreaField
            label="Descrição"
            placeholder="Coloque aqui sua descrição..."
            name="description"
            id="dateTimeDescriptionField"
            onChange={(event) =>
              onChange([event.target.value], ['description'])
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
            defaultValue={dateOptions?.find(
              (option) => option.value === field?.dateFormat,
            )}
            isTimeFormat
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
            onChange={(event) => {
              handleChange([event.target.checked], ['isTimeRequired']);
              setIsTimeRequired(event.target.checked);
            }}
          />
        </section>
        {isTimeRequired && (
          <section>
            <SelectField
              name="timeFormat"
              label="Formato da hora"
              isTimeFormat
              answerOptions={timeOptions}
              defaultValue={timeOptions?.find(
                (option) => option.value === field?.timeFormat,
              )}
              onChange={(value: any) =>
                handleChange([value?.value], ['timeFormat'])
              }
            />
          </section>
        )}
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
};

export default DateTimeConfiguration;
