import React, { useState, useCallback, useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import { useQuery } from '@apollo/react-hooks';

import NoData from '../../../components/Common/NoData';
import LoadingSpinner from '../../../components/Common/LoadingSpinner';
import Pagination from '../../../components/Common/Pagination';

import bookReader from '../../../assets/book-reader-icon.png';

import { LIST_OWN_RESPONSES } from '../../../services/requests/answers';

import {
  TableHeader,
  TableRow,
  LoadingContainer,
  PaginationContainer,
} from './styles';

interface Response {
  id: string;
  createdAt: string;
  answerCount: number;
  questionsCount: number;
}

interface ResponseData {
  _id: string;
  createdAt: string;
  form: {
    questions: {
      _id: string;
    }[];
  };
  answersAndQuestions: {
    question: {
      _id: string;
    };
  }[];
}

interface IndividualResponsesProps {
  formId: string;
}

const IndividualResponses: React.FC<IndividualResponsesProps> = ({
  formId,
}) => {
  const [page, setPage] = useState(0);

  const { loading: listOwnResponsesLoading, data: responsesData } = useQuery(
    LIST_OWN_RESPONSES,
    {
      variables: {
        form: formId,
        page,
      },
    },
  );

  const responses: Response[] = useMemo(() => {
    if (responsesData?.data?.error === null) {
      return responsesData.data.responses.map((response: ResponseData) => {
        return {
          id: response._id,
          createdAt: format(
            parseISO(response.createdAt),
            "dd/MM/yyyy 'às' HH:mm:ss",
          ),
          answerCount: response.answersAndQuestions.length,
          questionsCount: response.form.questions.length,
        };
      });
    }
    return [];
  }, [responsesData]);

  const totalPages = useMemo(() => {
    if (responsesData?.data?.error === null) {
      return responsesData.data.pages;
    }
    return 0;
  }, [responsesData]);

  const isResponseListEmpty = useMemo(() => {
    return !listOwnResponsesLoading && responses.length === 0;
  }, [listOwnResponsesLoading, responses.length]);

  const handlePageChange = useCallback((clickedPage) => {
    setPage(clickedPage);
  }, []);

  return (
    <>
      <TableHeader>
        <h3 style={{ flex: 2 }}>Data</h3>
        <h3 style={{ flex: 1 }}>Localização</h3>
        <h3 style={{ flex: 2 }}>Quantidade de respostas</h3>
        <h3 style={{ flex: 1 }}>Ações</h3>
      </TableHeader>
      {listOwnResponsesLoading && (
        <LoadingContainer>
          <LoadingSpinner />
        </LoadingContainer>
      )}
      {!listOwnResponsesLoading &&
        responses.map((response) => (
          <TableRow
            key={response.id}
            href={`/preview_response/${response.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ flex: 2 }}>{response.createdAt}</span>
            <span style={{ flex: 1 }}>Píaui, Teresina</span>
            <span style={{ flex: 2 }}>
              {`${response.answerCount} respostas / ${response.questionsCount} perguntas`}
            </span>

            <div style={{ flex: 1 }}>
              <a
                href={`/preview_response/${response.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={bookReader} alt="Ver" />
                <span>Ver</span>
              </a>
            </div>
          </TableRow>
        ))}
      {isResponseListEmpty && (
        <NoData message="Infelizmente você ainda não tem nenhuma resposta em sua pesquisa :(" />
      )}
      <PaginationContainer>
        <Pagination
          onPageChange={handlePageChange}
          actualPage={page}
          totalPages={totalPages}
          numberOfPagesToShow={3}
        />
      </PaginationContainer>
    </>
  );
};

export default IndividualResponses;
