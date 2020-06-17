import * as Yup from 'yup';

export default Yup.object().shape({
  id: Yup.string().required(),
  isActive: Yup.boolean().notRequired(),
  name: Yup.string().required(),
  description: Yup.string().notRequired(),
  beginDate: Yup.date().notRequired(),
  endDate: Yup.date().notRequired(),
  hasLimitedResponses: Yup.boolean().notRequired(),
  maxResponses: Yup.number().notRequired(),
  isTotemMode: Yup.boolean().notRequired(),
  canDisplayProgressBar: Yup.boolean().notRequired(),
  progressBarType: Yup.string().notRequired(),
  canAllowMultipleSubmissions: Yup.boolean().notRequired(),
  background: Yup.string().required(),
  logo: Yup.string().notRequired(),
  headerText: Yup.string().notRequired(),
  hasLogoInHeader: Yup.boolean().notRequired(),
  headerBackground: Yup.string().notRequired(),
  footerText: Yup.string().notRequired(),
  footerBackground: Yup.string().notRequired(),
});
