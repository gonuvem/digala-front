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
        color: '#f90',
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
];
