interface QuestionData {
  type: string;
  name: string;
  data: any[];
}

export const mockData: QuestionData[] = [
  {
    type: 'radar',
    name: 'Múltipla Escolha',
    data: [
      {
        label: 'Opção 01',
        respostas: 17,
      },
      {
        label: 'Opção 02',
        respostas: 95,
      },
      {
        label: 'Opção 03',
        respostas: 48,
      },
    ],
  },
  {
    type: 'pie',
    name: 'Escolha única',
    data: [
      {
        id: 'Opção 01',
        value: 17,
      },
      {
        id: 'Opção 02',
        value: 95,
      },
      {
        id: 'Opção 03',
        value: 48,
      },
    ],
  },
  {
    type: 'barRace',
    name: 'NPS',
    data: [
      {
        id: 'Pouca aprovação',
        value: 24,
      },
      {
        id: 'Media aprovação',
        value: 34,
      },
      {
        id: 'Muita aprovação',
        value: 14,
      },
    ],
  },
  {
    type: 'calendar',
    name: 'Data',
    data: [
      {
        day: '2016-03-27',
        value: 257,
      },
      {
        day: '2016-05-15',
        value: 383,
      },
      {
        day: '2016-11-02',
        value: 32,
      },
      {
        day: '2015-07-09',
        value: 398,
      },
      {
        day: '2017-12-18',
        value: 55,
      },
    ],
  },
];

/**
 * No calendário enviar ordenado por data se for possível
 */
