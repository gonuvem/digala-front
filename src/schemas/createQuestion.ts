import * as Yup from 'yup';

export default Yup.array().of(
  Yup.object().shape({
    type: Yup.string().required(),
    formPage: Yup.number().required(),
    position: Yup.number().required(),
    config: Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().notRequired(),
      checkBox: Yup.object()
        .default(null)
        .nullable()
        .shape({
          hasHorizontalAlignment: Yup.boolean().required(),
          hasRandomResponsesOrder: Yup.boolean().required(),
          hasLimitedChoices: Yup.boolean().required(),
          maxChoices: Yup.number().notRequired(),
          answerOptions: Yup.array()
            .of(
              Yup.object()
                .shape({
                  text: Yup.string().required(),
                  image: Yup.string().notRequired(),
                })
                .required(),
            )
            .required()
            .typeError('Você precisa cadastrar pelo menos 1 opção na lista'),
        })
        .notRequired(),
      date: Yup.object()
        .default(null)
        .nullable()
        .shape({
          isDateRequired: Yup.boolean().required(),
          dateFormat: Yup.string().notRequired(),
          isTimeRequired: Yup.boolean().required(),
          timeFormat: Yup.string().notRequired(),
          canCaptureInterval: Yup.boolean().required(),
        })
        .notRequired(),

      dropDown: Yup.object()
        .default(null)
        .nullable()
        .shape({
          hasRandomResponsesOrder: Yup.boolean().required(),
          answerOptions: Yup.array()
            .of(
              Yup.object()
                .shape({
                  text: Yup.string().required(),
                  image: Yup.string().notRequired(),
                })
                .required(),
            )
            .required(),
        })
        .notRequired(),

      email: Yup.object()
        .default(null)
        .nullable()
        .shape({
          hasValidation: Yup.boolean().required(),
        })
        .notRequired(),

      imageChoice: Yup.object()
        .default(null)
        .nullable()
        .shape({
          isMultipleChoice: Yup.boolean().required(),
          maxChoices: Yup.number().notRequired(),
          hasRandomResponsesOrder: Yup.boolean().required(),
          answerOptions: Yup.array()
            .of(
              Yup.object()
                .shape({
                  text: Yup.string().required(),
                  image: Yup.string().notRequired(),
                })
                .required(),
            )
            .required(),
        })
        .notRequired(),

      link: Yup.object()
        .default(null)
        .nullable()
        .shape({
          hasValidation: Yup.boolean().required(),
        })
        .notRequired(),

      longText: Yup.object()
        .default(null)
        .nullable()
        .shape({
          placeholder: Yup.string().notRequired(),
          hasLimitedChars: Yup.boolean().required(),
          maxChars: Yup.number().notRequired(),
        })
        .notRequired(),

      matrix: Yup.object()
        .default(null)
        .nullable()
        .shape({
          isMultipleChoice: Yup.boolean().required(),
          rowsLabels: Yup.array().of(Yup.string()).required(),
          colsLabels: Yup.array().of(Yup.string()).required(),
        })
        .notRequired(),

      nps: Yup.object()
        .default(null)
        .nullable()
        .shape({
          canDisplayLabels: Yup.boolean().required(),
          leftLabel: Yup.string().notRequired(),
          rightLabel: Yup.string().notRequired(),
          canStartAtZero: Yup.boolean().required(),
          escale: Yup.string().required(),
        })
        .notRequired(),

      number: Yup.object()
        .default(null)
        .nullable()
        .shape({
          hasMaxMinLimit: Yup.boolean().required(),
          maxValue: Yup.number().notRequired(),
          minValue: Yup.number().notRequired(),
          incValue: Yup.number().notRequired(),
        })
        .notRequired(),

      phone: Yup.object()
        .default(null)
        .nullable()
        .shape({
          hasValidation: Yup.boolean().required(),
        })
        .notRequired(),

      radioButton: Yup.object()
        .default(null)
        .nullable()
        .shape({
          hasHorizontalAlignment: Yup.boolean().required(),
          hasRandomResponsesOrder: Yup.boolean().required(),
          answerOptions: Yup.array()
            .of(
              Yup.object()
                .shape({
                  text: Yup.string().required(),
                  image: Yup.string().notRequired(),
                })
                .required(),
            )
            .required(),
        })
        .notRequired(),

      shortText: Yup.object()
        .default(null)
        .nullable()
        .shape({
          placeholder: Yup.string().notRequired(),
          hasLimitedChars: Yup.boolean().required(),
          maxChars: Yup.number().notRequired(),
        })
        .notRequired(),

      slider: Yup.object()
        .default(null)
        .nullable()
        .shape({
          minValue: Yup.number().required(),
          minLabel: Yup.string().notRequired(),
          maxValue: Yup.number().required(),
          maxLabel: Yup.string().notRequired(),
          canHideValue: Yup.boolean().required(),
        })
        .notRequired(),

      sortList: Yup.object()
        .default(null)
        .nullable()
        .shape({
          hasRandomResponsesOrder: Yup.boolean().required(),
          answerOptions: Yup.array()
            .of(
              Yup.object()
                .shape({
                  text: Yup.string().required(),
                  image: Yup.string().notRequired(),
                })
                .required(),
            )
            .required(),
        })
        .notRequired(),
    }),
  }),
);
