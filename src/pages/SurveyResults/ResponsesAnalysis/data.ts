interface QuestionData {
  type: string;
  name: string;
  data: any[];
}

export const mockData: QuestionData[] = [
  {
    type: 'checkBox',
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
];
