interface DateFormats {
  mask: string;
  placeholder: string;
  fnsMask: string;
  calendarView: 'year' | 'month' | 'decade' | 'century' | undefined;
}

interface DateObject {
  monthYear: DateFormats;
  dayMonthYear: DateFormats;
  dayMonth: DateFormats;
}

interface TimeFormats {
  mask: string;
  placeholder: string;
  fnsMask: string;
}

interface TimeObject {
  hourMinute: TimeFormats;
  hourMinuteSecond: TimeFormats;
}

export const dateFormats: DateObject = {
  monthYear: {
    mask: '99/9999',
    placeholder: 'MM/AAAA',
    fnsMask: 'MM/yyyy',
    calendarView: 'year',
  },
  dayMonthYear: {
    mask: '99/99/9999',
    placeholder: 'DD/MM/AAAA',
    fnsMask: 'dd/MM/yyyy',
    calendarView: 'month',
  },
  dayMonth: {
    mask: '99/99',
    placeholder: 'DD/MM',
    fnsMask: 'dd/MM',
    calendarView: 'month',
  },
};

export const timeFormats: TimeObject = {
  hourMinute: {
    mask: '99:99',
    placeholder: 'Hh:Mm',
    fnsMask: 'HH:mm',
  },
  hourMinuteSecond: {
    mask: '99:99:99',
    placeholder: 'Hh:Mm:Ss',
    fnsMask: 'HH:mm:ss',
  },
};
