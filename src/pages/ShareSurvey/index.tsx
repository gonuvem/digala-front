import React, { useState, useMemo, useRef, useCallback } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import QRCode from 'qrcode.react';
import { MdMail } from 'react-icons/md';
import { RiQrCodeLine } from 'react-icons/ri';
import { AiFillHtml5 } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import Layout from '../../layout';
import PageHeader from '../../components/Common/Header';

import {
  Container,
  Header,
  LinkShare,
  ShareOptions,
  Separator,
  CardOption,
  Name,
  Titles,
  NavLink,
  ButtonMedia,
  ButtonCopy,
  ModalShareSurvey,
} from './styles';

import whatsapp from '../../assets/whatsapp_icon.png';
import facebook from '../../assets/facebook_icon.png';
import telegram from '../../assets/telegram_icon.png';
import twitter from '../../assets/twitter_icon.png';

import { READ_FORM } from '../../services/requests/forms';

interface IParams {
  id: string;
}

const ShareSurvey: React.FC = () => {
  const surveyUrlFieldRef = useRef<HTMLInputElement>(null);
  const downloadQrCodeAnchorRef = useRef<HTMLAnchorElement>(null);
  const { id } = useParams<IParams>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: formData, loading: formLoading } = useQuery(READ_FORM, {
    variables: { id },
  });

  const surveyName = useMemo(() => {
    if (formData && formData.data) {
      return formData.data.form.config.name;
    }
    return '';
  }, [formData]);

  const surveyUrl = useMemo(() => {
    if (window) {
      const url = window.location.href.replace('share', 'survey');
      return url;
    }
    return '';
  }, []);

  const copySurveyUrlToClipboard = useCallback(() => {
    try {
      if (!document.queryCommandSupported('copy')) {
        throw new Error();
      }
      surveyUrlFieldRef.current?.select();
      document.execCommand('copy');
      toast.info('Link copiado com sucesso!');
    } catch (err) {
      toast.error('Ocorreu um erro ao tentar copiar a url');
    }
  }, []);

  const handleShareByQRCode = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleDownloadQRCode = useCallback(() => {
    const canvas = document.getElementById(
      'qr-code-canvas',
    ) as HTMLCanvasElement;
    canvas.toBlob(
      (blob) => {
        if (downloadQrCodeAnchorRef.current) {
          downloadQrCodeAnchorRef.current.href = URL.createObjectURL(blob);
          downloadQrCodeAnchorRef.current.download = 'QRCode.jpg';
          downloadQrCodeAnchorRef.current.click();

          URL.revokeObjectURL(downloadQrCodeAnchorRef.current.href);
        }
      },
      'image/jpeg',
      0.9,
    );
  }, []);

  return (
    <>
      <PageHeader />
      <Layout>
        <Container>
          <Header>
            <Titles>
              <span>{surveyName}</span>
              <nav>
                <NavLink href={`/edit_survey/${id}`}>Editar</NavLink>
                <NavLink isActive href="#">
                  Compartilhar
                </NavLink>
                <NavLink href={`/survey_results/${id}`}>Resultados</NavLink>
              </nav>
            </Titles>
            <LinkShare>
              <div>
                <p>Copie o link e envie-o para compartilhar a pesquisa</p>
                <div>
                  <input
                    ref={surveyUrlFieldRef}
                    type="text"
                    value={surveyUrl}
                  />
                  <ButtonCopy onClick={copySurveyUrlToClipboard}>
                    COPIAR
                  </ButtonCopy>
                </div>
              </div>
              <Separator />
              <div>
                <p>
                  Clicando nos bot??es abaixo voc?? pode compartilhar direto nas
                  redes sociais
                </p>
                <div>
                  <ButtonMedia type="button">
                    <img src={whatsapp} alt="Whatsapp Link" />
                  </ButtonMedia>
                  <ButtonMedia type="button">
                    <img src={facebook} alt="Facebook Link" />
                  </ButtonMedia>
                  <ButtonMedia type="button">
                    <img src={telegram} alt="Telegram Link" />
                  </ButtonMedia>
                  <ButtonMedia type="button">
                    <img src={twitter} alt="Twitter Link" />
                  </ButtonMedia>
                </div>
              </div>
            </LinkShare>
          </Header>
          <ShareOptions>
            <button type="button">
              <CardOption color="#3475D2">
                <MdMail />
              </CardOption>
              <Name fontColor="#3778D4">E-mails em lote</Name>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </button>
            <button onClick={handleShareByQRCode} type="button">
              <CardOption color="#FF75A7">
                <RiQrCodeLine />
              </CardOption>
              <Name fontColor="#C85C83">QR Code</Name>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </button>
            <button type="button">
              <CardOption color="#E2846A">
                <AiFillHtml5 />
              </CardOption>
              <Name fontColor="#EB8A6F">Incorporar</Name>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </button>
          </ShareOptions>
        </Container>
        <ModalShareSurvey
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          closeTimeoutMS={300}
        >
          <h2>QR Code</h2>
          <p>
            Voc?? pode colocar esse QR Code em suas redes sociais, campanhas
            publicitarias entre outros v??rios locais. Qualquer pessoa com um
            celular smartphone pode ler e ir?? direto para sua pesquisa
          </p>
          <QRCode id="qr-code-canvas" value={surveyUrl} size={256} />
          <button type="button" onClick={handleDownloadQRCode}>
            Baixar QR Code
          </button>
          <a ref={downloadQrCodeAnchorRef} href="/share">
            Link
          </a>
        </ModalShareSurvey>
      </Layout>
    </>
  );
};

export default ShareSurvey;
