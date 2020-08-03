import { gql } from 'apollo-boost';

import { errorFragment } from './fragment';

export const SHOW_FORM = gql`
  query($id: ID!) {
    showForm(id: $id) {
      form {
        _id
        config {
          name
          description
          beginDate
          endDate
          canDisplayProgressBar
          progressBarType
          canAllowMultipleSubmissions
        }
        numResponses
        numPages
        style {
          background
          logo
          headerText
          hasLogoInHeader
          headerBackground
          footerText
          footerBackground
        }
        questions {
          _id
          type {
            alias
          }
          formPage
          position
          config {
            name
            description
            isRequired
            checkBox {
              hasHorizontalAlignment
              hasRandomResponsesOrder
              hasLimitedChoices
              maxChoices
              answerOptions {
                _id
                text
                image
              }
            }
            date {
              isDateRequired
              dateFormat
              isTimeRequired
              timeFormat
              canCaptureInterval
            }
            dropDown {
              hasRandomResponsesOrder
              answerOptions {
                _id
                text
                image
              }
            }
            email {
              hasValidation
            }
            imageChoice {
              isMultipleChoice
              maxChoices
              hasRandomResponsesOrder
              answerOptions {
                _id
                text
                image
              }
            }
            link {
              hasValidation
            }
            longText {
              placeholder
              hasLimitedChars
              maxChars
            }
            matrix {
              isMultipleChoice
              rowsLabels
              colsLabels
            }
            nps {
              canDisplayLabels
              canStartAtZero
              leftLabel
              rightLabel
              escale
            }
            number {
              hasMaxMinLimit
              maxValue
              minValue
              incValue
            }
            phone {
              hasValidation
            }
            radioButton {
              hasHorizontalAlignment
              hasRandomResponsesOrder
              answerOptions {
                _id
                text
                image
              }
            }
            shortText {
              placeholder
              hasLimitedChars
              maxChars
            }
            slider {
              minValue
              minLabel
              maxValue
              maxLabel
              canHideValue
            }
            sortList {
              hasRandomResponsesOrder
              answerOptions {
                _id
                text
                image
              }
            }
          }
        }
      }
      ${errorFragment}
    }
  }
`;
