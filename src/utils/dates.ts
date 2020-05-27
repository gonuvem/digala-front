import { parseISO, format } from 'date-fns';

export const formtDate = (iso: string) => {
  return format(parseISO(iso), 'dd/MM/yyyy');
};
