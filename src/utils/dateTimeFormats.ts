export const dateFormats = {
  'month/year': {
    mask: '99/9999',
    placeholder: 'MM/AAAA',
    fnsMask: 'MM/yyyy',
  },
  'day/month/year': {
    mask: '99/99/9999',
    placeholder: 'DD/MM/AAAA',
    fnsMask: 'dd/MM/yyyy',
  },
  'day/month': {
    mask: '99/99',
    placeholder: 'DD/MM',
    fnsMask: 'dd/MM',
  },
};

export const timeFormats = {
  'hour/minute': {
    mask: '99:99',
    placeholder: 'Hh:Mm',
    fnsMak: 'HH:mm',
  },
  'hour/minute/second': {
    mask: '99:99:99',
    placeholder: 'Hh:Mm:Ss',
    fnsMask: 'HH:mm:ss',
  },
};
